import { HydratedDocument } from "mongoose";
import {singleton} from "tsyringe";
import Product,{ProductI} from "../schemas/Product";

@singleton()
class ProductService {

    async saveProduct(product:ProductI) {
        try {
            const NewProduct:HydratedDocument<ProductI> = new Product(product);

            return NewProduct;
        } catch (error) {
            throw new Error(error);
        }
    }
  

    async getAll() {
        try {
         
            const products = await Product.find({});
            return products;
        } catch (e) {
            throw new Error(e);
        }
    }
  

    async getByCategory(category: String) {
        try {
          
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
