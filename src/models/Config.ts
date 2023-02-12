import mongoose, { Schema, model, Document } from 'mongoose';

export interface ConfigI {
	openDate: String | null;
	closeDate: String | null;
	name: String | null;
}

interface BaseConfigDocument extends ConfigI, Document {}

const Config = new Schema<BaseConfigDocument>({
	openDate: { type: 'string' || null },
	closeDate: { type: 'string' || null },
	name: { type: 'string' || null },
	products: { type: 'array' || null }
});

Config.statics.getCartStatus = async function () {
	const currentConfig = await this.findOne({});
	const { openDate, closeDate, name } = currentConfig;

	if (!openDate || !closeDate) {
		return { openDate: null, closeDate: null, status: 'closed' };
	}

	let formattedOpenDate = new Date(currentConfig.openDate);
	let formattedClosedDate = new Date(currentConfig.closeDate);

	formattedOpenDate.setHours(formattedOpenDate.getHours() + 3);
	formattedClosedDate.setHours(formattedClosedDate.getHours() + 3);

	const openTime = formattedOpenDate.getTime();
	const closeTime = formattedClosedDate.getTime();

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
	return { openDate, closeDate, status, name };
};

Config.statics.getAllSales = async function () {
	const allSales = await this.find({});
	return allSales;
};

Config.statics.getSale = async function (salesId) {
	const sale = await this.find({ _id: salesId });
	return sale[0];
};

Config.statics.createSale = async function (openDate, closeDate, name, id) {
	const sale = await this.insertMany({ openDate: openDate.toString(), closeDate: closeDate.toString(), name: name });
	return sale[0];
};

Config.statics.updateDates = async function (openDate, closeDate, name, id) {
	await this.findOneAndUpdate(
		{ _id: id },
		{ openDate: openDate.toString(), closeDate: closeDate.toString(), name: name }
	);
};

Config.statics.updateProducts = async function (products, saleToUpdate) {
	const saleJSON = JSON.stringify(saleToUpdate);
	const saleObj = JSON.parse(saleJSON);
	products.forEach(product => {
		if (product.stock) {
			saleObj.products.push(product);
		}
	});
	await this.updateOne({ _id: saleObj._id.toString() }, { $set: { products: saleObj.products } }, {});
};

if (!mongoose.models.Config) {
	model<BaseConfigDocument>('Config', Config);
}

export default mongoose.models.Config;
