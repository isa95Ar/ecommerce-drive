
import { container } from 'tsyringe';
import OrderService from '../../../src/services/OrderService';

export default async function getCartStatus(req, res) {
	const orderService = container.resolve(OrderService);
	try {
        const {userId, saleId} = req.query
		const cartStatus = await orderService.getUserOrderBySale(userId, saleId)
		res.status(200).json(cartStatus);
	} catch (error) {
		console.log(error, "Getting cart status");
		res.status(500).json(error);
	}
}