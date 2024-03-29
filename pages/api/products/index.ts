import { container } from 'tsyringe';
import ProductService from '../../../src/services/ProductService';

export default async function getProducts(req, res) {
	const productService = container.resolve(ProductService);
	try {
		const { search, category, page } = req.query;
		if (search) {
			const products = await productService.searchProduct(category, search);
			return res.status(200).json(products);
		}
		const result = await productService.getProducts(category, page);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: error.jsonOutPut() });
	}
}
