require("colors");
const inquirer = require("inquirer");

const completedTasksOptions = async (tasks) => {
  const choices = tasks.map((task, index) => {
    const { id, description, completed } = task;

    const doneText = "Done".green;
    const pendingText = "Pending".red;
    const statusText = completed ? doneText : pendingText;
    const name = `${description} :: ${statusText}`;

    return { value: id, name, checked: completed };
  });

  const options = [
    {
      type: "checkbox",
      name: "ids",
      message: "Select tasks to complete",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(options);
  return ids;
};

module.exports = completedTasksOptions;
