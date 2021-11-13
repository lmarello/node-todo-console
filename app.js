const DatabaseService = require("./database/database-service");
const homeMenu = require("./helpers/inquirer/home");
const pause = require("./helpers/inquirer/pause");
const Todos = require("./models/todos");
const optionMenu = require("./helpers/menu");

const main = async () => {
  console.clear();
  let option = undefined;
  const databaseService = new DatabaseService();

  const todos = new Todos();
  const todosDb = databaseService.getAll();

  if (todosDb) {
    todos.addRange(todosDb);
  }

  do {
    option = await homeMenu();
    await optionMenu(option, todos, databaseService);
    await pause();
  } while (option !== 0);
};

main();
