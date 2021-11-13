const completedTasksOptions = require("../inquirer/completedTasksOptions");

const completedTasks = async (todos, databaseService) => {
  const ids = await completedTasksOptions(todos.getAll());
  todos.setComplete(ids);
  databaseService.save(todos.getAll());
};

module.exports = completedTasks;
