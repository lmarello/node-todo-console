const fs = require("fs");

const file = "./database/data.json";

const saveOnFile = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

const getAllFromFile = () => {
  if (!fs.existsSync(file)) {
    return null;
  }

  const data = fs.readFileSync(file, "utf-8");

  console.log(data);
  return JSON.parse(data);
};

module.exports = {
  saveOnFile,
  getAllFromFile,
};
