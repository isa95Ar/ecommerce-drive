import { container } from "tsyringe";
import OrderService from "../../src/services/OrderService";

export default async function postOrder(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Invalid method. Only POST requests allowed' })
    return
  }
  try {
    const orderService = container.resolve(OrderService);
    const order = req.body;
    await orderService.saveOrder(order)
    res.status(200).json({success: true, error: false});
  } catch (error) {
    res.status(500).json(error);
  }

}
