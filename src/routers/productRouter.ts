import express from 'express';

import { registerProduct, getAll } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.post('/', registerProduct);
productRouter.get('/', getAll);

export default productRouter;