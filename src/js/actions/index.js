export const addTodo = (payload) => {
  return {
    type: 'ADD_TODO',
    payload
  }
}

export const loadTodos = (payload) => {
  return {
    type: 'LOAD_TODOS',
    payload
  }
}

export const deleteTodo = (payload) => {
  return {
    type: 'DELETE_TODO',
    payload
  }
}

export const toggleTodo = (payload) => {
  return {
    type: 'TOGGLE_TODO',
    payload
  }
}

export const changeFilter = (payload) => {
  return {
    type: 'CHANGE_FILTER',
    payload
  }
}