import mongoose, { Schema, model, Document } from 'mongoose';

export interface ConfigI {
	openDate: Date | null;
	closeDate: Date | null;
}

interface BaseConfigDocument extends ConfigI, Document {}

const Config = new Schema<BaseConfigDocument>({
	openDate: { type: Date || null },
	closeDate: { type: Date || null }
});

Config.statics.getCartStatus = async function () {
	const currentConfig = await this.findOne({});
	const openTime = currentConfig.openDate ? currentConfig.openDate.getTime() : null;
	const closeTime = currentConfig.closeDate ? currentConfig.closeDate.getTime() : null;

	if (!openTime || !closeTime) {
		return { openDate: null, closeDate: null, status: 'closed' };
	}

	const today = new Date();
	const isOpen = today.getTime() >= openTime && today.getTime() <= closeTime;
	let status = '';

	if (isOpen) {
		status = 'open';
	} else if (today.getTime() < openTime) {
		status = 'toOpen';
	} else {
		status = 'closed';
	}

	const {openDate, closeDate} = currentConfig;

	return { openDate, closeDate, status };
};

Config.statics.updateDates = async function (openDate, closeDate) {
	await this.findOneAndUpdate({ openDate: openDate.toString(), closeDate: closeDate.toString() });
};

if (!mongoose.models.Config) {
	model<BaseConfigDocument>('Config', Config);
}

export default mongoose.models.Config;
