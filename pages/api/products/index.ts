import { container } from "tsyringe";
import ProductService from "../../../src/services/ProductService";

export default async function getProducts(req, res) {
  const productService = container.resolve(ProductService);
  try {
    const products = await productService.getProducts(req.query.page);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}
