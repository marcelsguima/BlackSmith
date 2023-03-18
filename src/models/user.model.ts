import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const createUser = async (user: IUser) => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)
    `, [username, vocation, level, password]);
  return insertId;
};

// const getAllProducts = async (): Promise<AllProducts[]> => {
//   const [rows] = await connection.execute<AllProducts[] & RowDataPacket[]>(`
//   SELECT * FROM Trybesmith.products`);
//   return rows;
// };

const productModel = { 
  createUser,
  // getAllProducts,
};

export default productModel;