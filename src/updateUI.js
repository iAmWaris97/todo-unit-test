import storeTodo from './crud.js';

const itemsDiv = document.querySelector('.todos-con');
const generateItems = (todoitem) => {
  let result = '';
  if (todoitem.isCompeleted) {
    result = `
                <li class="item" draggable="true">
                <input type="checkbox" name="checkbox" data-id ="${todoitem.index}" class="checktodo" checked>
                <input type="text" value="${todoitem.description}"data-id ="${todoitem.index}" class="savedItem line"  >
                <i class="fa-solid fa-trash delete-btn" data-id ="${todoitem.index}" aria-hidden="true"></i>
                </li>
                `;
  } else {
    result = `
                <li class="item" draggable="true">
                <input type="checkbox" name="checkbox"  data-id ="${todoitem.index}" class="checktodo" >
               <input type="text" value="${todoitem.description}" data-id ="${todoitem.index}" class="savedItem"  >
               <i class="fa-solid fa-trash delete-btn" data-id ="${todoitem.index}" aria-hidden="true"></i>
               </li>
                `;
  }
  return result;
};
class updateInterface {
  static displayTodos() {
    const todoList = storeTodo.getTodos();

    let htmlContent = '';
    todoList.forEach((todoitem) => {
      htmlContent += generateItems(todoitem);
    });
    itemsDiv.innerHTML = htmlContent;
    document.querySelector('.additem').value = '';
    document.querySelectorAll('.checktodo').forEach((item) => {
      item.addEventListener('change', function addCheckListner() {
        const index = this.getAttribute('data-id');
        const status = this.checked;
        const todos = storeTodo.updateStatus(
          index,
          status,
          storeTodo.getTodos(),
        );
        localStorage.setItem('todo', JSON.stringify(todos));
        updateInterface.displayTodos();
      });
    });
    document.querySelectorAll('.delete-btn').forEach((item) => {
      item.addEventListener('click', function addCheckListner() {
        const index = this.getAttribute('data-id');
        const todos = storeTodo.removeTodo(index, storeTodo.getTodos());
        localStorage.setItem('todo', JSON.stringify(todos));
        updateInterface.displayTodos();
      });
    });
    document.querySelectorAll('.clear').forEach((item) => {
      item.addEventListener('click', () => {
        const todos = storeTodo.removeCompeletedTodo(storeTodo.getTodos());
        localStorage.setItem('todo', JSON.stringify(todos));
        updateInterface.displayTodos();
      });
    });

    document.querySelectorAll('.savedItem').forEach((item) => {
      item.addEventListener('keypress', function updateDescriptionEvent(event) {
        if (event.key === 'Enter') {
          const index = this.getAttribute('data-id');
          const description = this.value;
          const todos = storeTodo.updateDescription(
            index,
            description,
            storeTodo.getTodos(),
          );
          localStorage.setItem('todo', JSON.stringify(todos));
          updateInterface.displayTodos();
        }
      });
    });
  }
}
export default updateInterface;
