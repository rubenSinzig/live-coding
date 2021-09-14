const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
/*
        send()
        render()
        json()
        end()
        */
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
  const userCheck = await User.findOne({ username: req.body.username });
  if (userCheck) {
    return res.status(400).send("This username is already been used");
  }

  try {
    //   const saltRounds = 20
    //   const salt = await bcrypt.genSalt(saltRounds);
    //   const hashedPassword = await bcrypt.hash(req.body.password,salt);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    res.end();
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
