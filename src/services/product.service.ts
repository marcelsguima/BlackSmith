import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

const createProduct = async (product:IProduct): Promise<IProduct> => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

const getAllProducts = async () => {
  const AllProducts = await productModel.getAllProducts();
  return AllProducts;
};

export { 
  createProduct,
  getAllProducts,
};