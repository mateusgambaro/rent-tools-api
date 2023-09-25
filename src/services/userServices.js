import * as jwt from "jsonwebtoken";
import { User } from "../../models";
import {Products} from "../../models";
require("dotenv").config();

const secret = process.env.JWT_SECRET || "secret";

const createNewUser = async (name, email, password, document) => {
  const user = await User.create({ name, email, password, document });

  const jwtConfig = {
    expiresIn: "7d",
    algorithm: "HS256",
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  const newUser = {
    user: user.id,
    token
  }

  return newUser;
};

const getUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ["password"] },
  });

  return allUsers;
};

const getUserByEmail = async (email) => {
  const userByEmail = await User.findOne({ where: { email } });

  return userByEmail;
};

const getUserById = async (id) => {
  const userById = await User.findByPk(id, {
    include: [
      {
        model: Products,
        as: "products",
        through: {
          attributes: ['id'], 
        }
      },
    ],
  });

  return userById;
};

module.exports = {
  createNewUser,
  getUsers,
  getUserByEmail,
  getUserById,
};
