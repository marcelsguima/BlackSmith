import { Order } from '../interfaces';
import orderModel from '../models/order.model';

const getOrders = async (): Promise<Order[]> => {
  const orders = await orderModel.getOrders();
  return orders;
};

const orderService = {
  getOrders,
};

export default orderService;
