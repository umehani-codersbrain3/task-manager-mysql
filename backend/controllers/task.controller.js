const Task = require("../models/task.model");

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  await Task.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Updated successfully" });
};

exports.deleteTask = async (req, res) => {
  await Task.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted successfully" });
};