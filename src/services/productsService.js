import { Op } from 'sequelize';
import { Products, Category, User } from '../../models';

const createProduct = async ({ user, title, content, image }) => {
  const product = await Products.create({ title, content, userId: user.id });
  return product;
};

const getAllProducts = async (search = '', orderBy = '') => {
  const where = {};

  if (search) {
    where.title = {
      [Op.like]: `%${search}%`
    };
  }

  const order = [];
  if (orderBy === 'price') {
    order.push(['price', 'ASC']);
  } else if (orderBy === 'alphabetical') {
    order.push(['title', 'ASC']);
  }

  const products = await Products.findAll({
    where,
    order,
  })
  
  return products;
};

export { createProduct, getAllProducts };
