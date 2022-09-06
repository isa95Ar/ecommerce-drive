import {singleton} from "tsyringe";
import ApiException from "../exceptions/ApiExeption";
import Order, {OrderI} from "../models/Order";
import BaseService from "./BaseService";

//ToDo crear interfaz de config

@singleton()
class OrderService  extends BaseService{

  constructor() {
    super();
  }

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