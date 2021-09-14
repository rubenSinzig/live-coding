const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userControllers = {};
// GET
userControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// POST
userControllers.addNewUser = async (req, res) => {
  try {
  } catch (err) {
    res.status().json({ message: err.message });
  }
};
// POST
userControllers.login = async (req, res) => {
  try {
  } catch (err) {
    res.status().json({ message: err.message });
  }
};

module.exports = userControllers;
