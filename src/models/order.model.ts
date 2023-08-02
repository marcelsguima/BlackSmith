import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces';
import connection from './connection';

const getOrders = async ():Promise<Order[]> => {
  const query = `
  SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(product.id) AS productsIds
    FROM Trybesmith.orders AS ord
    INNER JOIN Trybesmith.products AS product
    ON ord.id = product.order_id GROUP BY ord.id;`;

  const [orders] = await connection.execute<Order[] & RowDataPacket[]>(query);

  return orders;
};
const orderModel = { 
  getOrders,
};

export default orderModel;