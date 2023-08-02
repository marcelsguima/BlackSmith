import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import { getAllProducts, createProduct } from '../services/product.service';

const registerProduct = async (req:Request<object, object, IProduct>, res: Response) => {
  const { body } = req;
  const newProduct = await createProduct(body);
  return res.status(201).json(newProduct);
};

const getAll = async (req: Request, res: Response) => {
  const allProducts = await getAllProducts();
  return res.status(200).json(allProducts);
};

export { 
  registerProduct,
  getAll,
};