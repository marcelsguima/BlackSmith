import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const createUser = async (user:IUser) => {
  const newProduct = await userModel.createUser(user);
  return newProduct;
};

const userService = {
  createUser,
};

export default userService;
