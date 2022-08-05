import mongoConnection from "../../../src/utils/mongoConnection";
import Product from "../../../src/schemas/Product";

export default async function test(req, res) {
  try {
    await mongoConnection();
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}
