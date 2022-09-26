import { container } from 'tsyringe';
import GoogleSheetService from '../../../../src/services/GoogleSheetService';
import OrderService from '../../../../src/services/OrderService';

export default async function postOrders(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).send({ message: 'Invalid method. Only POST requests allowed' });
	}
	try {
		const orderService = container.resolve(OrderService);
		const googleService = new GoogleSheetService('orders');
		const body = JSON.parse(req.body);
		let orders = body.orders;
		await googleService.insertOnGoogleSheet(orders);
		await orderService.clearLocalOrders();
		res.status(200).json({ success: true, error: false });
	} catch (error) {
		res.status(500).json(error);
	}
}
