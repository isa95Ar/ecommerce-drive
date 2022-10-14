import mongoose, { Schema, model, Document } from 'mongoose';

export interface ConfigI {
	openDate: String | null;
	closeDate: String | null;
}

interface BaseConfigDocument extends ConfigI, Document {}

const Config = new Schema<BaseConfigDocument>({
	openDate: { type: "string" || null },
	closeDate: { type: "string" || null }
});

Config.statics.getCartStatus = async function () {
	const currentConfig = await this.findOne({});
	const openTime = currentConfig.openDate ? new Date(currentConfig.openDate).getTime() : null;
	const closeTime = currentConfig.closeDate ? new Date(currentConfig.closeDate).getTime() : null;

	if (!openTime || !closeTime) {
		return { openDate: null, closeDate: null, status: 'closed' };
	}

	const today = new Date(new Date().toLocaleString("es-ar", {timeZone: "America/Argentina/Tucuman"}));
	const isOpen = today.getTime() >= openTime && today.getTime() <= closeTime;
	let status = '';

	if (isOpen) {
		status = 'open';
	} else if (today.getTime() < openTime) {
		status = 'toOpen';
	} else {
		status = 'closed';
	}
	console.log(status);
	const { openDate, closeDate } = currentConfig;

	return { openDate, closeDate, status };
};

Config.statics.updateDates = async function (openDate, closeDate) {
	await this.findOneAndUpdate({ openDate: openDate.toString(), closeDate: closeDate.toString() });
};

if (!mongoose.models.Config) {
	model<BaseConfigDocument>('Config', Config);
}

export default mongoose.models.Config;
