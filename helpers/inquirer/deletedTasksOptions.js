require("colors");
const inquirer = require("inquirer");

const deletedTasksOptions = async (tasks) => {
  const choices = tasks.map((task, index) => {
    const { id, description, completed } = task;

    const indexText = `${index + 1}.`.green;
    const doneText = "Done".green;
    const pendingText = "Pending".red;
    const statusText = completed ? doneText : pendingText;
    const name = `${indexText} ${description} :: ${statusText}`;

    return { value: id, name };
  });

  choices.unshift({
    value: 0,
    name: `${"0.".green} Cancel`,
  });

  const options = [
    {
      type: "list",
      name: "id",
      message: "Select task to delete",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(options);
  return id;
};

module.exports = deletedTasksOptions;
