import {singleton} from "tsyringe";
import ApiException from "../exceptions/ApiExeption";
import Order, {OrderI} from "../models/Order";

//ToDo crear interfaz de config

@singleton()
class OrderService {
  async saveOrder(order:OrderI) {
    try {
      await Order.createOrder(order);
    } catch (e) {
      throw new ApiException(e);
    }
  }

  async getOrdersCount() {
    try {
      const ordersCount = await Order.getOrdersCount();
      return {ordersCount};
    } catch (e) {
      throw new ApiException(e);
    }
  }
}

export default OrderService;