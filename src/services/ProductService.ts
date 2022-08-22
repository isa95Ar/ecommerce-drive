import { singleton } from "tsyringe";
import Product from "../schemas/Product";
import mongoConnection from "../utils/mongoConnection";

mongoConnection();

@singleton()
class ProductService {
  async saveProduct(product) {
    try {
      // @ts-ignore
      return Product.create(product);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProducts(page) {
    try {
      // @ts-ignore
      const products = await Product.find({})
        .skip(page * 12)
        .limit(12);
      return products;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getByCategory(category: String) {
    try {
      // @ts-ignore
      const products = await Product.find({ category });
      if (!products.length) {
        throw new Error(`No products found on category ${category}`);
      }
      return products;
    } catch (e) {
      throw new Error(e);
    }
  }

  async clearAll() {
    try {
      return Product.deleteMany({});
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default ProductService;
