import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
// import * as types from "../types";

const apiTodosUrl = "data/todos.json";

const getTodos = async () => {
  try {
    const {data: todos} = await axios.get(apiTodosUrl);
    return todos;
  } catch (error) {
    throw error;
  }
};

function* fetchTodos() {
  try {
    const todos = yield call(getTodos);
    yield put({ type: "GET_TODOS_SUCCESS", todos });
  } catch (error) {
    yield put({ type: "GET_TODOS_FAILED", message: error.message });
  }
}

function* todosSaga() {
  yield takeEvery("GET_TODOS_REQUESTED", fetchTodos);
}

export default todosSaga;
