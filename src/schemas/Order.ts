import  mongoose, { Schema, model,Document } from "mongoose";

interface Product {
  code: number,
  name: string
  amount: number,
};

export interface OrderI {
  email: string;
  products: Product[];
};

interface BaseOrderDocument extends OrderI,Document {}

const orderSchema = new Schema<BaseOrderDocument>({
  email: { type: "string" },
  products: [{ code: "number", name: "string", amount: "number" }]
});

if (!mongoose.models.Order){
  model<BaseOrderDocument>("Order", orderSchema); 
}

export default mongoose.models.Order;
