import  mongoose, { Schema, model,Document } from "mongoose";

interface Product {
  code: number;
  name: string;
  price: number;
  minimum: string;
  qty: number;
  total: number
};

export interface OrderI {
  email: string;
  products: Product[];
};

interface BaseOrderDocument extends OrderI,Document {}

const Order = new Schema<BaseOrderDocument>({
  email: { type: "string" },
  products: [{ code: "number", name: "string", price: "number", minimum: "string", qty: "number", total:"number" }]
});

Order.statics.createOrder = async function(order: OrderI) {
  await this.create(order);
};

Order.statics.getOrdersCount = async function() {
  const count = await this.countDocuments({});
  return count;
};

Order.statics.getUserOrder = async function(email: string) {
  const order = await this.find({email});
  return order;
};

if (!mongoose.models.Order){
  model<BaseOrderDocument>("Order", Order); 
}

export default mongoose.models.Order;
