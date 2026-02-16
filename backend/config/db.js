const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("task_manager", "taskuser", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;