require("colors");
const inquirer = require("inquirer");

const confirmation = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "confirmed",
      message,
    },
  ];

  const { confirmed } = await inquirer.prompt(question);
  return confirmed;
};

module.exports = confirmation;
