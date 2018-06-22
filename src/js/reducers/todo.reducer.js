export const reducerTodos = (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':{
      return [...todos, action.payload];
    }
    case 'DELETE_TODO': {
      const id = action.payload.id;
      const newState = todos.filter(item => {
        return item.id !== id;
      })
      return newState;
    }
    case 'TOGGLE_TODO': {
      const id = action.payload.id;
      const newState = todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
      return newState;
    }
    default:{
      return todos;
    }
  }
}