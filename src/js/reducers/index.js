import { combineReducers } from 'redux';
import { reducerFilter } from './filter.reducer';
import { reducerTodos } from './todo.reducer';

export const rootReducer = combineReducers({
  todoState: reducerTodos,
  filter: reducerFilter
});