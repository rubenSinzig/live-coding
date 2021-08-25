const EmployeesData = require("../model/employeesModel");
const express = require("express");

// Middleware
// Get one employee by name (only one)
const getEmployee = async (req, res, next) => {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });
    employee = await EmployeesData.findOne({ name: req.params.name });
    console.log(employee);
    if (employee == null) {
      // NOt found
      return res.status(404).json({ message: "Sorry, employee NOT FOUND." });
    }
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
  res.employee = employee;
  next();
};
// Get one add
const getAdd = async (req, res, next) => {
  // find will get all or with criteria wil get some
  let employee;
  try {
    employee = await EmployeesData.find({ add: req.params.add });
    if (employee == null) {
      // NOt found
      return res.status(404).json({ message: "Sorry, NOT FOUND." });
    }
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
  res.employee = employee;
  next();
};

// View all Employees

const getAllEmployees = async (error, req, res, next) => {
  try {
    const employees = await EmployeesData.find();
    // 200 OK
    //console.log(employees);
    res.status(200).json(
      employees.map((employee) => {
        const { _id, name, age, add, employeeAddedDate } = employee;
        return {
          Id: _id,
          Name: name,
          Age: age,
          Address: add,
          employeeAddedDate: employeeAddedDate,
          request: {
            type: "GET",
            url: `http://localhost:5000/employees/${name}`,
          },
        };
      })
    );
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
};
const getOneEmployee = async (req, res) => {
  // 200 Ok
  res.status(200).json(res.employee);
};

const updateOneEmployee = async (req, res) => {
  const { name, age, add } = req.body;
  if (name) {
    res.employee.name = name;
  }
  if (age != null) {
    res.employee.age = age;
  }
  if (add) {
    res.employee.add = add;
  }
  try {
    // save
    await res.employee.save();
    res.status(200).json({ message: "Employee updated", data: res.employee });
  } catch (err) {
    // 400 for bad req
    res.status(400).json({ message: err.message });
  }
};
module.exports = {
  getEmployee,
  getAdd,
  getAllEmployees,
  getOneEmployee,
  updateOneEmployee,
};
