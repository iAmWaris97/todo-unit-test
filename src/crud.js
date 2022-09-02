class storeTodo {
  static getTodos() {
    return JSON.parse(localStorage.getItem('todo')) || [];
  }

  static reArrange(todos) {
    todos.forEach((todo, i) => {
      todo.index = i + 1;
    });
    return todos;
  }

  static saveTodo(todo, todos) {
    if (todos.length === 0) {
      todo.index = 1;
    } else {
      const lastTodo = todos[todos.length - 1];
      todo.index = lastTodo.index + 1;
    }
    todos.push(todo);
    return todos;
  }

  static removeTodo(index, todos) {
    todos.forEach((todo, i) => {
      if (todo.index === parseInt(index, 10)) {
        todos.splice(i, 1);
      }
    });
    todos = storeTodo.reArrange(todos);
    return todos;
  }

  static removeCompeletedTodo(todos) {
    todos = todos.filter((x) => x.isCompeleted === false);
    todos = storeTodo.reArrange(todos);
    return todos;
  }

  static updateStatus(index, status, todos) {
    todos[index - 1].isCompeleted = status;
    return todos;
  }

  static updateDescription(index, desc, todos) {
    todos[index - 1].description = desc;
    return todos;
  }
}

module.exports = storeTodo;
