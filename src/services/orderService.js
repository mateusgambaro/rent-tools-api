import { Orders, Products, User } from '../../models';

const getOrdersByUserId = async (userId) => {
  return await Orders.findAll({
    where: { userId },
    include: [
      {
        model: Products,
        as: 'products',
      },
      {
        model: User,
        as: 'user',
      },
    ],
  });
};
const createOrder = async ({ productIds, userId }) => {
    const ordersData = productIds.map((productId) => ({
      productId,
      userId,
    }));
  
    const orders = await Orders.bulkCreate(ordersData);
    return orders;
  };
  
  export { createOrder, getOrdersByUserId };