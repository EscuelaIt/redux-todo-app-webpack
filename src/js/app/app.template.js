import { $id, $s, $on, $delegate } from './helpers';

const _itemId = element => parseInt(element.parentNode.parentNode.dataset.id, 10);

export class AppTemplate {

  constructor() {
    this.$todoList = $id('todo-list');
    this.$form = $id('form');
    this.$newTodo = $id('new-todo');
  }

  showTodos(todos) {
		this.$todoList.innerHTML = this.renderTodos(todos);
  }
  
  bindAddTodo(handler) {
		$on(this.$form, 'submit', (event) => {
      event.preventDefault();
      const data = new FormData(this.$form);
      this.$newTodo.value = "";
			handler(data);
		});
  }

  bindRemoveTodo(handler) {
		$delegate(this.$todoList, '.destroy', 'click', ({target}) => {
			handler(_itemId(target));
		});
  }

  bindToggleTodo(handler) {
		$delegate(this.$todoList, '.toggle', 'click', ({target}) => {
			handler(_itemId(target));
		});
	}

  renderTodos (todos) {
    let todosHtml = '';
    todos.forEach(todo => {
      todosHtml += this.renderTodo(todo);
    });
    return todosHtml;
  }

  renderTodo(todo) {
    return `
    <li data-id="${todo.id}" class="${todo.completed}">
      <div class="view">
        <input class="toggle" type="checkbox" ${todo.completed ? 'checked': ''}>
        <label>${todo.text}</label>
        <button class="destroy" type="button"></button>
      </div>
    </li>`;
  }
}