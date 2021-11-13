require("colors");
const inquirer = require("inquirer");

const pause = async () => {
  console.log("\n");
  const question = await inquirer.prompt([
    {
      type: "input",
      name: "question",
      message: `Press ${"ENTER".green} to continue`,
    },
  ]);
  return question;
};

module.exports = pause;
