import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

const createProduct = async (product:IProduct): Promise<IProduct> => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

export default createProduct;