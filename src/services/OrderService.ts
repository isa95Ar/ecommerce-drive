import { HydratedDocument } from "mongoose";
import {singleton} from "tsyringe";
import Order, {OrderI} from "../schemas/Order";

//ToDo crear interfaz de config

@singleton()
class OrderService {
  async saveOrder(order:OrderI) {
    try {
        const NewOrder:HydratedDocument<OrderI> = new Order(order);
        await NewOrder.save();
        return NewOrder;
    } catch (error) {
        throw new Error(error);
    }
  }
}

export default OrderService;