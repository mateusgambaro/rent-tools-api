import {createProduct, getAllProducts} from '../services/productsService';

const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { user } = req;
    const product = await createProduct({ user, title, content });

    if (product.message) return res.status(product.code).json(product.message);

    return res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (req, res) => {
  try {
    const { search, orderBy } = req.query;
    const product = await getAllProducts(search, orderBy);

    return res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

export { create, getAll };
