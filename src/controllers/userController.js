require("dotenv").config();
import rescue from "express-rescue";

import { User } from "../../models";
import { createNewUser, getUsers, getUserById } from "../services/userServices";

const create = rescue(async (req, res) => {
  const { name, email, password, document } = req.body;

  const userEmail = await User.findOne({ where: { email } });

  if (userEmail) {
    return res.status(409).json({ message: "User already registered" });
  }

  const user = await createNewUser(name, email, password, document);

  return res.status(201).json({ user });
});

const getAllUsers = rescue(async (_req, res) => {
  const users = await getUsers();
  return res.status(200).json(users);
});

const userById = rescue(async (req, res) => {
  const { id } = req.params;
  const users = await getUserById(id);

  if (!users) return res.status(404).json({ message: "User does not exist" });
  return res.status(200).json(users);
});

module.exports = {
  create,
  getAllUsers,
  userById,
};
