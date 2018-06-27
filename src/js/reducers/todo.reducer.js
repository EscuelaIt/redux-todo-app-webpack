export const reducerTodos = (todoState = {}, action) => {
  switch (action.type) {
    case 'LOAD_TODOS': {
      return {
        ...todoState,
        loading: true
      }
    }
    case 'LOAD_TODOS_SUCCESS': {
      const todos = action.payload.todos;
      return {
        data: todos,
        loading: false,
        errors: []
      }
    }
    case 'LOAD_TODOS_FAIL': {
      const errors = action.payload.errors;
      return {
        data: [],
        loading: false,
        errors
      }
    }
    case 'ADD_TODO':{
      return {
        ...todoState,
        data: [...todos, action.payload]
      };
    }
    case 'DELETE_TODO': {
      const id = action.payload.id;
      const todos = todos.filter(item => {
        return item.id !== id;
      })
      return {
        ...todoState,
        data: todos
      };
    }
    case 'TOGGLE_TODO': {
      const id = action.payload.id;
      const todos = todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
      return {
        ...todoState,
        data: todos
      };
    }
    default:{
      return todoState;
    }
  }
}