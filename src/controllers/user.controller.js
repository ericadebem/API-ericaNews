import { User } from "../models/user.model.js";

const create = (req, res) => {
  const user = req.body;

  res.json(user);
};

module.exports = { create };
