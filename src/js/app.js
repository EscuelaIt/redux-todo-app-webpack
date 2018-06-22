import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers';
import { initialState } from './initState';
import { addTask, deleteTask, changeFilter } from './actions';
import { $on } from './app/helpers';
import thunk from 'redux-thunk';

import { AppController } from './app/app.controller';
import { AppTemplate } from './app/app.template';


document.addEventListener("DOMContentLoaded", (event) => {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
  );

  const template   =  new AppTemplate();
  const controller =  new AppController(template, store);
  controller.showInitTodos();

  const setRoute = () => {
    controller.setRoute(document.location.hash);
  }

  $on(window, 'hashchange', setRoute);
});