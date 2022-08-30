import  mongoose, { Schema, model,Document } from "mongoose";
import { slugify } from "../../helpers/slug";

export interface CategoryI {
  name: string;
  slug: string;
};

interface BaseCategoryDocument extends CategoryI,Document {}

const Category = new Schema<BaseCategoryDocument>({
  name: { type: "string" },
  slug: { type: "string" }
});

Category.statics.getAll = async function() {
  const categories = await this.find({}).select({_id: 0, __v: 0});
  return categories;
}

Category.statics.createCategory = async function(name: string) {
  const slug = slugify(name);
  const newCategory = {name, slug};
  await this.create(newCategory);
}

Category.statics.deleteAll = async function () {
  await this.deleteMany({});
}

if (!mongoose.models.Category){
  model<BaseCategoryDocument>("Category", Category); 
}

export default mongoose.models.Category;
