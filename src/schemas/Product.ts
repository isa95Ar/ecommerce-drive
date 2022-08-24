import  mongoose, { Schema, model,Document } from "mongoose";

export interface ProductI {
  stock: boolean;
  code: number;
  name: string;
  minium: string;
  price: number;
  category: string;
  seller: string;
};

interface BaseProductDocument extends ProductI,Document {}

const productSchema = new Schema<BaseProductDocument>({
  stock: { type: "boolean" },
  code: { type: "number" },
  name: { type: "string" },
  minium: { type: "string" },
  price: { type: "number" },
  category: { type: "string" },
  seller: {type: "string"}
});

if (!mongoose.models.Product){
  model<BaseProductDocument>("Product", productSchema); 
}

export default mongoose.models.Product;
