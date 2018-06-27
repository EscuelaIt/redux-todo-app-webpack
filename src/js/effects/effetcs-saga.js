import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getAllTodos } from './../http/todo.service';

function* fetchTodos(action) {
  try {
     const todos = yield call(getAllTodos);
     yield put({
      type: "LOAD_TODOS_SUCCESS",
      payload: {
        todos
      }
     });
  } catch (e) {
     yield put({
       type: "LOAD_TODOS_FAIL",
        payload: {
          errors: [e.message]
        }
     });
  }
}

export function* myEffects() {
  yield takeLatest("LOAD_TODOS", fetchTodos);
}