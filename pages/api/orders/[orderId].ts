import { container } from 'tsyringe';
import OrderService from '../../../src/services/OrderService';

export default async function updateOrder(req, res) {
	if (req.method !== 'PUT') {
		return res.status(405).send({ message: 'Invalid method. Only PUT requests allowed' });
	}
	try {
		const orderService = container.resolve(OrderService);
		const { orderId } = req.query;
		const body = JSON.parse(req.body);
		await orderService.updateOrder(orderId, body.products);
		res.status(200).json({ error: false, message: 'Order updated successfully' });
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
}
