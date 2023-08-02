import { Request, Response } from 'express';

import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response) => {
  const allProducts = await orderService.getOrders();
  return res.status(200).json(allProducts);
};

const orderController = { getAllOrders };
export default orderController;