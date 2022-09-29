import { updateProducts } from '../../../commands/UpdateProducts';

export default async function updateProductsOnDb(req, res) {
	try {
		await updateProducts();
		res.status(200).json({ error: false });
	} catch (error) {
		res.status(500).json(error);
	}
}
