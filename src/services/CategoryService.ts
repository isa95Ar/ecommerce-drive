import {singleton} from "tsyringe";
import ApiException from "../exceptions/ApiExeption";
import Category from "../models/Category";

@singleton()
class CategoryService {

    async saveCategory(name:string) {
        try {
            await Category.createCategory(name);
            return {error: false};
        } catch (e) {
            throw new ApiException(e);
        }
    }
  
    async getAll() {
        try {
            const categories = await Category.getAll();
            return categories;
        } catch (e) {
            throw new ApiException(e);
        }
    }

    async clearAll() {
        try {
          await Category.deleteAll();
          return {error: false};
        } catch (error) {
          throw new ApiException(error);
        }
      }
}

export default CategoryService;
