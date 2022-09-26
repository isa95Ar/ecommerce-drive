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

	const formatDate = (date: Date) => {
		const day = date.getUTCDate();
		let formattedDay = day.toString();
		const month = date.getUTCMonth() + 1;
		let formattedMonth = month.toString();

		if (formattedDay.length === 1) {
			formattedDay = '0' + formattedDay;
		}
		if (formattedMonth.length === 1) {
			formattedMonth = '0' + formattedMonth;
		}

		return `${formattedDay}/${formattedMonth}`;
	};

	const openDate = formatDate(currentConfig.openDate);
	const closeDate = formatDate(currentConfig.closeDate);

	return { openDate, closeDate, status };
};

Config.statics.updateDates = async function (openDate, closeDate) {
	await this.findOneAndUpdate({ openDate, closeDate });
};

if (!mongoose.models.Config) {
	model<BaseConfigDocument>('Config', Config);
}

export default mongoose.models.Config;
