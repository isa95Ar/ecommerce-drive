import { container } from 'tsyringe';
import ProductService from '../../../src/services/ProductService';

export default async function getProducts(req, res) {
	const productService = container.resolve(ProductService);
	try {
		console.log('hola')
		const searchQuery = req.query.search;
		console.log(req.query)
		console.log(searchQuery)
		if (searchQuery) {
			const products = await productService.searchProduct(searchQuery);
			return res.status(200).json(products);
		}
		const result = await productService.getProducts(req.query.page);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: error.jsonOutPut() });
	}
}
