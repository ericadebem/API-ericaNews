import { User } from "../models/User.model.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user
      ? res.status(200).json({ user })
      : res.status(404).json({ msg: "User not found" });
  } catch (error) {
    console.error(e);
    res.status(500).json(e);
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ msg: "Error occurred" });
  }
};
export const postUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ msg: "An error has occurred" });
  }
};
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    user
      ? res.status(200).json({ user })
      : res.status(404).json({ msg: "User not found" });
  } catch (e) {
    console.error(e.message);
    return res.status(500).json({ msg: "An error has occurred" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    user
      ? res.status(200).json({ user })
      : res.status(404).json({ msg: "User not found" });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ msg: "An error has occurred" });
  }
};
