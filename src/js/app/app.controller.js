import { addTodo, deleteTodo, changeFilter, toggleTodo, loadTodos } from './../actions';
import { getVisibleTodos, getLoadingTodos } from './../selectors';
import subscribe from 'redux-subscribe-reselect';
import { success, fail, fetchTodos } from './../effects/effects';

export class AppController {

  constructor(template, store) {
    this.template = template;
    this.store = store;
    this.template.bindAddTodo(this.addTodo.bind(this));
    this.template.bindRemoveTodo(this.removeTodo.bind(this));
    this.template.bindToggleTodo(this.toggleTodo.bind(this));
    // this.store.subscribe(this.showTodos.bind(this));

    subscribe(this.store, getVisibleTodos, this.showTodos.bind(this));
    subscribe(this.store, getLoadingTodos, this.showLoading.bind(this));
  
    // this.store.dispatch(success());
    // this.store.dispatch(fail());
    // this.store.dispatch(fetchTodos());
    const action = loadTodos();
    this.store.dispatch(action);
  
  }

  setRoute(route) {
    const filter = this.getFilter(route);
    const action = changeFilter({filter});
    this.store.dispatch(action);
  }

  getFilter(route) {
    switch (route) {
      case '#/active':
        return 'ACTIVE';
       case '#/completed':
        return 'COMPLETED';
      default:
        return 'ALL';
    }
  }

  addTodo(data) {
    const action = addTodo({
      id: 12,
      text: data.get('text'),
      completed: false
    });
    this.store.dispatch(action);
  }

  removeTodo(id) {
    const action = deleteTodo({id});
    this.store.dispatch(action);
  }

  toggleTodo(id) {
    const action = toggleTodo({id});
    this.store.dispatch(action);
  }
  
  showInitTodos() {
    const state = this.store.getState();
    const todos = getVisibleTodos(state);
    this.showTodos(todos);
  }

  showTodos(todos) {
    if(todos !== undefined) {
      this.template.showTodos(todos);
    }
  }

  showLoading(state) {
    this.template.showLoading(state);
  }
}