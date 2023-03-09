import { updateProductsForSale } from '../../../commands/UpdateProducts';

export default async function updateProductsOnDb(req, res) {
	try {
		if (req.method !== 'POST') {
			return res.status(405).send({ message: 'Invalid method. Only POST requests allowed' });
		}
		const body = JSON.parse(req.body);
		await updateProductsForSale(body.saleId);
		res.status(200).json({ error: false });
	} catch (error) {
		res.status(500).json(error);
	}
}
