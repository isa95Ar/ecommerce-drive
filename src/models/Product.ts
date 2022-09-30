import { truncate } from 'fs/promises';
import mongoose, { Schema, model, Document } from 'mongoose';
import { ProductModel } from '../global/types';

interface BaseProductDocument extends ProductModel, Document {}

const Product = new Schema<BaseProductDocument>({
	stock: { type: 'boolean' },
	code: { type: 'number' },
	name: { type: 'string', index: true },
	minimum: { type: 'string' },
	price: { type: 'number' },
	category: { type: 'string' },
	seller: { type: 'string' },
	picture: { type: 'string' }
});

Product.index({name: "text"});

Product.statics.getProducts = async function (page: number) {
	const limit = 60;

	const productsCount = await this.countDocuments();

	const products = await this.find({})
		.select({ _id: 0, __v: 0 })
		.limit(limit)
		.skip(limit * (page - 1));

	const totalPages = Math.ceil(productsCount / limit);
	return { products, totalPages };
};

Product.statics.createProduct = async function (product: ProductModel) {
	await this.create(product);
};

Product.statics.getByCategory = async function (category: string, page: number) {
	const limit = 60;

	const productsCount = await this.countDocuments({ category });

	const products = await this.find({ category })
		.select({ _id: 0, __v: 0 })
		.limit(limit)
		.skip(limit * (page - 1));

	if (!products.length) {
		throw new Error(`No products found on category ${category}`);
	}

	const totalPages = Math.ceil(productsCount / limit);
	return { products, totalPages };
};

Product.statics.deleteAll = async function () {
	await this.deleteMany({});
};

Product.statics.search = async function (query) {
	 const products = this.find(
		{$text: {$search: query}},
		{score: {$meta: "textScore"}}
	 ).sort({
		score: {$meta: "textScore"}
	 })
	 console.log(products);
	 return products;
}

if (!mongoose.models.Product) {
	const productModel = model<BaseProductDocument>('Product', Product);
	productModel.createIndexes();
}

export default mongoose.models.Product;
