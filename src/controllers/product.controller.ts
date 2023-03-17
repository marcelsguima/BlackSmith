import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import createProduct from '../services/product.service';

const registerProduct = async (req:Request<object, object, IProduct>, res: Response) => {
  const { body } = req;
  const newProduct = await createProduct(body);
  return res.status(201).json(newProduct);
};

export { registerProduct };