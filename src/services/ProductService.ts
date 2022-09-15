import { singleton } from "tsyringe";
import ApiException from "../exceptions/ApiExeption";
import { ProductModel } from "../global/types";
import Product from "../models/Product";
import BaseService from "./BaseService";


@singleton()
class ProductService extends  BaseService{

    constructor() {
        super();
    }

    async saveProduct(product:ProductModel) {
        try {
            await Product.createProduct(product);
            return {error: false};
        } catch (e) {
            throw new ApiException(e);
        }
    }
  
    async getProducts(page: number = 1) {
        try {
          const products = await Product.getProducts(page);
          return products;
        } catch (e) {
          throw new ApiException(e);
        }
      }
  
    async getByCategory(category: string, page: number = 1) {
        try {
            const products = await Product.getByCategory(category, page);
            return products;
        } catch (e) {
            throw new ApiException(e);
        }
    }
  
  async clearAll() {
    try {
      return Product.deleteAll();
    } catch (e) {
      throw new ApiException(e);
    }
  }
}

export default ProductService;
