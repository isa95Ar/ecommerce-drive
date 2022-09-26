import { container } from 'tsyringe';
import OrderService from '../../../../src/services/OrderService';

export default async function getOrdersCount(req, res) {
	const orderService = container.resolve(OrderService);
	try {
		const result = await orderService.getOrdersCount();
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
}
