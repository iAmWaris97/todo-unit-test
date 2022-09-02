import './style.css';
import Todo from './todo.js';
import storeTodo from './crud.js';
import updateInterface from './updateUI.js';

const todoInput = document.querySelector('.additem');

updateInterface.displayTodos();

todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const todoItem = new Todo(0, todoInput.value, false);
    const todos = storeTodo.saveTodo(todoItem, storeTodo.getTodos());
    localStorage.setItem('todo', JSON.stringify(todos));
    updateInterface.displayTodos();
  }
});
