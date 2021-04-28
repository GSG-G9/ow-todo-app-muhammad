import { all } from "redux-saga/effects";
import todosSaga from "./todosSaga";

function* rootSaga() {
  yield all([todosSaga()]);
}

export default rootSaga;
