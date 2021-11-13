require("colors");
const inquirer = require("inquirer");

const options = [
  {
    type: "list",
    name: "option",
    message: "What would you like to do?",
    choices: [
      { value: 1, name: "1. Creat task" },
      { value: 2, name: "2. Tasks list" },
      { value: 3, name: "3. Completed tasks list" },
      { value: 4, name: "4. Pending tasks list" },
      { value: 5, name: "5. Complete task(s)" },
      { value: 6, name: "6. Delete task" },
      { value: 0, name: "0. Quit" },
    ],
  },
];

const homeMenu = async () => {
  console.clear();
  console.log("===================================".green);
  console.log("             ToDo App              ".green);
  console.log("===================================".green);

  console.log("\n");

  const { option } = await inquirer.prompt(options);
  return option;
};

module.exports = homeMenu;
