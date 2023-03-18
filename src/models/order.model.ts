import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces';
import connection from './connection';

const getOrders = async ():Promise<Order[]> => {
  const query = `
  SELECT ord.id, ord.user_id as userId, JSON_ARRAYAGG(pr.id) as productsIds
  FROM Trybesmith.orders AS ord
  INNER JOIN Trybesmith.products as pr 
  ON ord.id = pr.order_id GROUP BY ord.id`;

  const [orders] = await connection.execute<Order[] & RowDataPacket[]>(query);

  return orders;
};
const productModel = { 
  getOrders,
};

export default productModel;