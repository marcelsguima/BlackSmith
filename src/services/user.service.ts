import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const createUser = async (user:IUser) => {
  const newProduct = await userModel.createUser(user);
  return newProduct;
};

// const getAllProducts = async () => {
//   const AllProducts = await userModel.getAllProducts();
//   return AllProducts;
// };

const userService = {
  createUser,
};

export default userService;
