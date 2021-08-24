// Express setup
const express = require("express");
const router = express.Router();
// Model
const EmployeesData = require("../model/employeesModel");
// OUr Gaol
// Get http://localhost:5000/employees get all employees
// Get http://localhost:5000/employees/:name get one employee
// POST http://localhost:5000/employees add new employee
// DELETE http://localhost:5000/employees/:name delete one employee by name (later will be by id)
// UPDATE aka  PUT http://localhost:5000/employees/:name update (All the info) one employee by name (later will be by id)
// PATCH http://localhost:5000/employees/:name update (some info) one employee by name (later will be by id)

// Get all Employee
router.get("/", async (req, res) => {
  //url  http://localhost:5000/employees
  try {
    const employees = await EmployeesData.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add employee
router.post("/", async (req, res) => {
  //url  http:localhost:5000/employees
  /*{
    "name" : "Hadi",
    "age":31,
    "add":"Berlin"
} */
  const employee = new EmployeesData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    const newEmployee = await employee.save();
    console.log(newEmployee);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware Get one employee
async function getEmployee(req, res, next) {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });

    employee = await EmployeesData.findOne({ name: req.params.name });
    if (employee == null)
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(employee);
  res.employee = employee;
  next();
}

// Get one employee
router.get("/:name", getEmployee, (req, res) => {
  // url http://localhost:5000/employees/Hadi
  res.status(200).json(res.employee);
});

// Delete one employee
router.delete("/:name", getEmployee, async (req, res) => {
  // url http://localhost:5000/employees/Hadi
  try {
    await res.employee.remove();
    res.status(200).json({ message: "Employee Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Patch one employee
router.patch("/:name", getEmployee, async (req, res) => {
  console.log(req.body);
  console.log(res.employee);
  if (req.body.name) {
    res.employee.name = req.body.name;
  }
  if (req.body.age) {
    res.employee.age = req.body.age;
  }
  if (req.body.add) {
    //           Berlin
    res.employee.add = req.body.add;
  }
  console.log(res.employee);
  try {
    await res.employee.save();
    res.status(200).json({ message: "Employee updated", data: res.employee });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
