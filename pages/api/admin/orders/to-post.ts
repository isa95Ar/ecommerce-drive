import { container } from "tsyringe";
import OrderService from "../../../../src/services/OrderService";

export default async function getOrdersToPost(req, res) {
  const orderService = container.resolve(OrderService);
  try {
    const orders = await orderService.getOrdersToPost();
    res.status(200).json({orders});
  } catch (error) {
    res.status(500).json(error);
  }
}