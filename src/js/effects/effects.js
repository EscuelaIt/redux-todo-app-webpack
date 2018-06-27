import { getAllTodos } from './../http/todo.service';

export function success() {
  return async (dispatch) => {
    dispatch({type: 'MY_FETCH_START'});
    try {
      setTimeout(() => {
        dispatch({type: 'MY_FETCH_SUCCESS'});
      }, 5000);
    } catch (error) {
      dispatch({type: 'MY_FETCH_FAIL'});
    }
  };
}

export function fail() {
  return async (dispatch) => {
    dispatch({type: 'MY_FETCH_START'});
    try {
      throw 'error';
      setTimeout(() => {
        dispatch({type: 'MY_FETCH_SUCCESS'});
      }, 5000);
    } catch (error) {
      dispatch({type: 'MY_FETCH_FAIL'});
    }
  };
}

export function fetchTodos() {
  return async (dispatch) => {
    dispatch({type: 'LOAD_TODOS'});
    try {
      const todos = await getAllTodos();
      dispatch({
        type: 'LOAD_TODOS_SUCCESS',
        payload: {
          todos
        }
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_TODOS_FAIL',
        payload: {
          errors: [error]
        }
      });
    }
  };
}