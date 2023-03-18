import { Request, Response } from 'express';
import userService from '../services/user.service';
import { generateToken } from '../middleware/tokenGenerator';

const registerUser = async (req:Request, res: Response) => {
  const { body } = req;
  const newUser = await userService.createUser(body);
  console.log(newUser);
  
  const token = generateToken({ body });
  return res.status(201).json({ token });
};

// const getAll = async (req: Request, res: Response) => {
//   const allProducts = await getAllProducts();
//   return res.status(200).json(allProducts);
// };

const userController = {
  registerUser,
};
export default userController;