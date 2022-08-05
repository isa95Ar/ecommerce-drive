import Product from "../../../src/schemas/Product";
import mongoConnection from "../../../src/utils/mongoConnection";

export default async function getAlmacen(req, res) {
  try {
    await mongoConnection();
    const { category } = req.query;
    const products = await Product.find({ category });
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}
