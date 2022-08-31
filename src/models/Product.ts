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
  const limit = 12;

  const productsCount = await this.countDocuments();

  const products = await this.find({})
    .select({_id: 0, __v: 0})
    .limit(limit)
    .skip(limit * (page - 1));
  
  const totalPages = Math.ceil(productsCount / limit);  
  return {products, totalPages};
}

Product.statics.createProduct = async function(product: ProductI) {
  await this.create(product); 
}

Product.statics.getByCategory = async function(category: string, page: number) {
  const limit = 12;

  const productsCount = await this.countDocuments({category});

  const products = await this.find({category})
    .select({_id: 0, __v: 0})
    .limit(limit)
    .skip(limit * (page - 1))
  
    if (!products.length) {
        throw new Error(`No products found on category ${category}`);
    }
  
  const totalPages = Math.ceil(productsCount / limit);  
  return {products, totalPages};
}

Product.statics.deleteAll = async function() {
  await this.deleteMany({});
}

if (!mongoose.models.Product){
  model<BaseProductDocument>("Product", Product); 
}

export default mongoose.models.Product;
