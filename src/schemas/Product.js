import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  stock: { type: "boolean" },
  code: { type: "number" },
  name: { type: "string" },
  minium: { type: "string" },
  price: { type: "number" },
  category: { type: "string" },
  seller: {type: "string"}
});

export default mongoose.models.Product || model("Product", productSchema);
