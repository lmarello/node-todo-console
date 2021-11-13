const inquirer = require("inquirer");

const createTaskOptions = async () => {
  const question = [
    {
      type: "input",
      name: "value",
      message: "Description: ",
      validate(value) {
        if (!value.length) return "Please enter a value";
        return true;
      },
    },
  ];

  const { value } = await inquirer.prompt(question);
  return value;
};

module.exports = createTaskOptions;
