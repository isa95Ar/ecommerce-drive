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

const Order = new Schema<BaseOrderDocument>({
  email: { type: "string" },
  products: [{ code: "number", name: "string", qty: "number" }]
});

Order.statics.createOrder = async function(order: OrderI) {
  await this.create(order);
}

Order.statics.getOrdersCount = async function() {
  const count = await this.countDocuments({});
  return count;
}

if (!mongoose.models.Order){
  model<BaseOrderDocument>("Order", Order); 
}

export default mongoose.models.Order;
