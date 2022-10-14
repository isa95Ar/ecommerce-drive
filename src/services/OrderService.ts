import { singleton } from 'tsyringe';
import ApiException from '../exceptions/ApiExeption';
import Order, { OrderI } from '../models/Order';
import BaseService from './BaseService';

//ToDo crear interfaz de config

@singleton()
class OrderService extends BaseService {
	constructor() {
		super();
	}

	async saveOrder(order: OrderI) {
		try {
			await Order.createOrder(order);
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async getCurrentOrders() {
		try {
			const currentOrders = await Order.getCurrentOrders();
			return JSON.parse(JSON.stringify(currentOrders));
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async getUserOrder(email: string) {
		try {
			const userOrder = await Order.getUserOrder(email);

			return userOrder;
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async getOrdersToPost() {
		try {
			const orders = await Order.getOrdersToPost();
			return orders;
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async updateOrder(orderId: string, products) {
		try {
			const updatedOrder = await Order.updateOrder(orderId, products);
			return updatedOrder;
		} catch (e) {
			throw new ApiException(e);
		}
	}

	async clearLocalOrders() {
		try {
			await Order.deleteAllOrders();
		} catch (e) {
			throw new ApiException(e);
		}
	}
}

export default OrderService;
