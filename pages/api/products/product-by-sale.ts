import { container } from 'tsyringe';
import ProductService from '../../../src/services/ProductService';

export default async function getProductsBySale(req, res) {
	const productService = container.resolve(ProductService);
	try {
		const { id } = req.query;
		const result = await productService.getProductsBySale(id, req.query);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: error.jsonOutPut() });
	}
}