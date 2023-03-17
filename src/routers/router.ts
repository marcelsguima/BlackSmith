import express from 'express';

import { registerProduct } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.post('/', registerProduct);

export default productRouter;