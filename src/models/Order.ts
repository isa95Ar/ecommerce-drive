import mongoose, { Schema, model, Document } from 'mongoose';

interface Product {
	code: number;
	name: string;
	price: number;
	minimum: string;
	qty: number;
	total: number;
	picture: string;
}

export interface OrderI {
	email: string;
	products: Product[];
	total: number;
}

interface BaseOrderDocument extends OrderI, Document {}

const Order = new Schema<BaseOrderDocument>({
	email: { type: 'string', unique: true },
	products: [
		{
			code: 'number',
			name: 'string',
			price: 'number',
			minimum: 'string',
			qty: 'number',
			total: 'number',
			picture: 'string'
		}
	],
	total: 'number'
});

Order.statics.createOrder = async function (order: OrderI) {
	await this.create(order);
};

Order.statics.getCurrentOrders = async function () {
	const orders = await this.find({}).select({ _id: 0, __v: 0, products: 0 });
	const count = orders.length;
	return { orders, count };
};

Order.statics.getUserOrder = async function (email: string) {
	const order = await this.findOne({ email }).lean();
	return order;
};

Order.statics.getOrdersToPost = async function () {
	const allOrders = await this.find({});
	const formattedOrders = [];
	allOrders.map(order => {
		order.products.map(product => {
			const newOrder = {
				email: order.email,
				product: product.name,
				code: product.code,
				cantidad: product.qty
			};
			formattedOrders.push(newOrder);
		});
	});
	return formattedOrders;
};

Order.statics.updateOrder = async function (orderId, products) {
	const updatedOrder = await this.findByIdAndUpdate(orderId, { products }, { new: true });
	return updatedOrder;
};

Order.statics.deleteAllOrders = async function () {
	await this.deleteMany({});
};

if (!mongoose.models.Order) {
	model<BaseOrderDocument>('Order', Order);
}

export default mongoose.models.Order;
