import { container } from 'tsyringe';
import OrderService from '../../../src/services/OrderService';

export default async function getOrderByUser(req, res) {
	const orderService = container.resolve(OrderService);
	try {
        const { userId } = req.query
		const ordersByUser = await orderService.getOrdersByUser(userId)
		res.status(200).json(ordersByUser);
	} catch (error) {
		console.log(error, "Getting cart status");
		res.status(500).json(error);
	}
}