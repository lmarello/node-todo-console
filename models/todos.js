require("colors");
const Todo = require("./todo");

const formatToShow = (todo, index) => {
  const { description, completed } = todo;

  const indexText = `${index}.`.green;
  const doneText = "Done".green;
  const pendingText = "Pending".red;
  const statusText = completed ? doneText : pendingText;

  return `${indexText} ${description} :: ${statusText}`;
};

class Todos {
  _todos = {};

  constructor() {
    this._todos = {};
  }

  getAll() {
    const list = [];

    Object.keys(this._todos).forEach((id) => {
      list.push(this._todos[id]);
    });

    return list;
  }

  add(description) {
    const todo = new Todo(description);
    this._todos[todo.id] = todo;
  }

  addRange(data) {
    data.map((todo) => {
      this._todos[todo.id] = todo;
    });
  }

  delete(id) {
    if (this._todos[id]) {
      delete this._todos[id];
      return true;
    }
    return false;
  }

  show() {
    this.getAll().map((todo, index) => {
      const formattedToDo = formatToShow(todo, index + 1);
      console.log(formattedToDo);
    });
  }

  showPending() {
    this.getAll()
      .filter((todo) => todo.completed === false)
      .map((todo, index) => {
        const formattedToDo = formatToShow(todo, index + 1);
        console.log(formattedToDo);
      });
  }

  showCompleted() {
    this.getAll()
      .filter((todo) => todo.completed === true)
      .map((todo, index) => {
        const formattedToDo = formatToShow(todo, index + 1);
        console.log(formattedToDo);
      });
  }

  setComplete(ids) {
    this.getAll().map((todo) => {
      const { id, completed } = todo;

      this._todos[id].completed = ids.includes(id) ? true : false;
    });
  }
}

module.exports = Todos;
