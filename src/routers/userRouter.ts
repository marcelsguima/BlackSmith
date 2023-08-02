import express from 'express';
import userController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/', userController.registerUser);

export default userRouter;