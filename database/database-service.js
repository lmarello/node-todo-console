const { saveOnFile, getAllFromFile } = require("../helpers/file");

class DatabaseService {
  save = (data) => {
    saveOnFile(data);
  };

  getAll = () => {
    return getAllFromFile();
  };
}

module.exports = DatabaseService;
