import { combineReducers } from 'redux';
import { reducerFilter } from './filter.reducer';
import { reducerTodos } from './todo.reducer';

export const rootReducer = combineReducers({
  todos: reducerTodos,
  filter: reducerFilter
});