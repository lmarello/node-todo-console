require("colors");
const createTaskOptions = require("../inquirer/createTaskOptions");

const createTask = async (todos, databaseService) => {
  const value = await createTaskOptions();
  todos.add(value);
  databaseService.save(todos.getAll());
  console.log("Task created".green);
};

module.exports = createTask;
