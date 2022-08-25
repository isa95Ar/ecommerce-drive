import { HydratedDocument } from "mongoose";
import {singleton} from "tsyringe";
import Product,{ProductI} from "../schemas/Product";

@singleton()
class ProductService {

    async saveProduct(product:ProductI) {
        try {
            const NewProduct:HydratedDocument<ProductI> = new Product(product);
            NewProduct.save();

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

  async getCategories() {
    try {
         
        const products = await Product.find({});
        
        let categories = [];

        products.map(product => { 
            if(!categories.includes(product.category)){
                categories.push(product.category);
            }
        });

        return categories;
    } catch (e) {
        throw new Error(e);
    }
  }
}

export default ProductService;
