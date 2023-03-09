import { container } from 'tsyringe';
import OrderService from '../../../src/services/OrderService';

export default async function getOrderBySale(req, res) {
	const orderService = container.resolve(OrderService);
	try {
        const {saleId} = req.query
		const orderBySaleStatus = await orderService.getOrderBySale(saleId)
		res.status(200).json(orderBySaleStatus);
	} catch (error) {
		console.log(error, "Getting cart status");
		res.status(500).json(error);
	}
}