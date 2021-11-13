const createTask = require("./createTask");
const completedTasks = require("./completedTasks");
const deletedTasks = require("./deletedTasks");

const optionMenu = async (option, todos, databaseService) => {
  switch (option) {
    case 1:
      await createTask(todos, databaseService);
      break;

    case 2:
      todos.show();
      break;

    case 3:
      todos.showCompleted();
      break;

    case 4:
      todos.showPending();
      break;

    case 5:
      await completedTasks(todos, databaseService);
      break;

    case 6:
      await deletedTasks(todos, databaseService);
      break;

    default:
      break;
  }
};

module.exports = optionMenu;
