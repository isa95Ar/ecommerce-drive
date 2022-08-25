import { container } from "tsyringe";
import ProductService from "../../src/services/ProductService";

export default async function categories(req, res) {
    const productService = container.resolve(ProductService);
    try {
      const products = await productService.getCategories();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }