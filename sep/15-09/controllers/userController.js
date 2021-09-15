const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Session = require("../models/sessionModel");
const uuid = require("uuid").v4;
const userControllers = {};

userControllers.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
userControllers.addUser = async (req, res) => {};
userControllers.login = async (req, res) => {};
userControllers.getOne = async (req, res) => {
  const username = req.params.name;
  try {
    //const user =  await User.findOne({username:username})
    const user = await User.findOne({ username });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
userControllers.deleteOneById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
};

module.exports = userControllers;
