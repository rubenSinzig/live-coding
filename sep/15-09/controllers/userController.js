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
userControllers.addUser = async (req, res) => {
  const userCheck = await User.findOne({ username: req.body.username });
  if (userCheck) {
    return res
      .status(400)
      .send("This name is already been used <br> <a href='/'>Try again</a>");
  }
  // to validate later :)
  // if any errors
  // req.session.done = false;
  // it was cool and no errors
  req.session.done = true;
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    // there will be a  for file
    console.log(req.file);
    const newUser = await new User({
      username: req.body.username,
      password: req.body.password,
      // role: "ADMIN",
      role: "USER",
      avatar: req.file.path,
    });
    console.log(newUser);
    newUser.save();
    res.status(200).send("New user been added <a href='/login'>login</a>");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
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
