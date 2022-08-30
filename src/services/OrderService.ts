import {singleton} from "tsyringe";
import ApiException from "../exceptions/ApiExeption";
import Order, {OrderI} from "../models/Order";

//ToDo crear interfaz de config

@singleton()
class OrderService {
  async saveOrder(order:OrderI) {
    try {
      await Order.createOrder(order);
    } catch (error) {
      throw new ApiException(error);
    }
  }
}

export default OrderService;