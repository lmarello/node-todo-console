const deletedTasksOptions = require("../inquirer/deletedTasksOptions");
const confirmation = require("../inquirer/confirmation");

const completedTasks = async (todos, databaseService) => {
  const id = await deletedTasksOptions(todos.getAll());

  if (id !== 0) {
    const confirmed = await confirmation("Do you want to delete the note?");

    if (confirmed) {
      const deleted = todos.delete(id);
      if (deleted) {
        databaseService.save(todos.getAll());
        console.log("Task deleted".red);
      }
    }
  }
};

module.exports = completedTasks;
