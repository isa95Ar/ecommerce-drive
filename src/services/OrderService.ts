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
      return ordersCount;
    } catch (e) {
      throw new ApiException(e);
    }
  }

  async getUserOrder(email: string) {
    try {
      const userOrder = await Order.getUserOrder(email);
      return userOrder;
    } catch (e) {
      throw new ApiException(e);
    }
  }

  async getOrdersToPost() {
    try {
      const orders = await Order.getOrdersToPost();
      return orders;
    } catch (e) {
      throw new ApiException(e);
    }
  }

  async clearLocalOrders() {
    try {
      await Order.deleteAllOrders();
    } catch (e) {
      throw new ApiException(e);
    }
  }
}

export default OrderService;