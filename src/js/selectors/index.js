import { createSelector } from 'reselect';

export const getFilter = (state) => state.filter;
export const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
  [ getFilter, getTodos ],
  ( filter, todos) => {
    switch (filter) {
      case 'ALL':
        return todos
      case 'COMPLETED':
        return todos.filter(t => t.completed)
      case 'ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)

export const getSize = createSelector(
  [ getVisibleTodos ],
  ( todos ) => {
    return todos.length;
  }
)