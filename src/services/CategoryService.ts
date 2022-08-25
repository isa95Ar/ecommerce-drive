import { HydratedDocument } from "mongoose";
import {singleton} from "tsyringe";
import { slugify } from "../../helpers/slug";
import Category, {CategoryI} from "../schemas/Categroy";

@singleton()
class CategoryService {

    async saveCategory(name:string) {
        try {
            const slug = slugify(name);
            const NewCategory:HydratedDocument<CategoryI> = new Category({name, slug});
            await NewCategory.save();
            return NewCategory;
        } catch (error) {
            throw new Error(error);
        }
    }
  
    async getAll() {
        try {
            const categories = await Category.find({});
            return categories;
        } catch (e) {
            throw new Error(e);
        }
    }

    async clearAll() {
        try {
          return Category.deleteMany({});
        } catch (error) {
          throw new Error(error);
        }
      }
}

export default CategoryService;
