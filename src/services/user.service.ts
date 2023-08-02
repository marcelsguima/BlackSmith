import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const createUser = async (user:IUser) => {
  const newUser = await userModel.createUser(user);
  return newUser;
};

const userService = {
  createUser,
};

export default userService;