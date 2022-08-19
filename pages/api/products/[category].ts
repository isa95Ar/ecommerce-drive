import { container } from "tsyringe";
import ProductService from "../../../src/services/ProductService";

export default async function getByCategory(req, res) {
  const productService = container.resolve(ProductService);
  try {
    const { category } = req.query;
    console.log(category)
    const products = await productService.getByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}
