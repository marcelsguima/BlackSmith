import { ResultSetHeader } from 'mysql2';
import { Id, IProduct } from '../interfaces';
import connection from './connection';

const createProduct = async (product: IProduct): Promise<IProduct & Id> => {
  const { name, amount } = product;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
    `, [name, amount]);
  return { id, name, amount };
};

const productModel = { createProduct };

export default productModel;