import  mongoose, { Schema, model, Document } from "mongoose";

export interface ProductI {
  stock: boolean,
  code: number,
  name: string,
  minium: string,
  price: number,
  category: string,
  seller: string,
  google_sheet_id?:string
};

interface BaseProductDocument extends ProductI,Document {}

const Product = new Schema<BaseProductDocument>({
  stock: { type: "boolean" },
  code: { type: "number" },
  name: { type: "string" },
  minium: { type: "string" },
  price: { type: "number" },
  category: { type: "string" },
  seller: {type: "string"}
});

Product.statics.getProducts = async function(page: number) {
  const products = await this.find({})
    .select({_id: 0, __v: 0})
    .limit(36)
    .skip(36 * page)
  return products;
}

Product.statics.createProduct = async function(product: ProductI) {
  await this.create(product); 
}

Product.statics.getByCategory = async function(category: string) {
  const products = await this.find({ category }).select({_id: 0, __v: 0});
    if (!products.length) {
        throw new Error(`No products found on category ${category}`);
    }
    return products;
}

Product.statics.deleteAll = async function() {
  await this.deleteMany({});
}

if (!mongoose.models.Product){
  model<BaseProductDocument>("Product", Product); 
}

export default mongoose.models.Product;
