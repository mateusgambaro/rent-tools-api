import { createOrder, getOrdersByUserId } from '../services/orderService';

const getOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await getOrdersByUserId(userId);

    if (!orders) {
      return res.status(404).json({ message: 'Pedidos não encontrados' });
    }

    return res.status(200).json(orders);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const create = async (req, res) => {
  try {
    const productIds = JSON.parse(req.body.products);
    const userId = req.body.userId;
    const orders = await createOrder({ productIds, userId });
    if (!orders) {
      return res.status(400).json({ message: 'Não foi possível criar o pedido' });
    }

    return res.status(201).json(orders);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

export { create, getOrders };