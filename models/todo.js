const { v4: uuidv4 } = require("uuid");

class Todo {
  id = "";
  description = "";
  completed = false;

  constructor(description) {
    this.id = uuidv4();
    this.description = description;
  }
}

module.exports = Todo;
