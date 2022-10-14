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
	const {openDate, closeDate} = currentConfig;
	if (!openDate || !closeDate) {
		return { openDate: null, closeDate: null, status: 'closed' };
	}

	let formattedOpenDate =  new Date(currentConfig.openDate);
	let formattedClosedDate =  new Date(currentConfig.closeDate);

	formattedOpenDate.setHours(formattedOpenDate.getHours() + 3);
	formattedClosedDate.setHours(formattedClosedDate.getHours() + 3);

	const openTime = formattedOpenDate.getTime();
	const closeTime = formattedClosedDate.getTime();

	const today = new Date();
	console.log(today, new Date(currentConfig.openDate))
	const isOpen = today.getTime() >= openTime && today.getTime() <= closeTime;
	let status = '';

	if (isOpen) {
		status = 'open';
	} else if (today.getTime() < openTime) {
		status = 'toOpen';
	} else {
		status = 'closed';
	}

	return { openDate, closeDate, status };
};

Config.statics.updateDates = async function (openDate, closeDate) {
	await this.findOneAndUpdate({ openDate: openDate.toString(), closeDate: closeDate.toString() });
};

if (!mongoose.models.Config) {
	model<BaseConfigDocument>('Config', Config);
}

export default mongoose.models.Config;
