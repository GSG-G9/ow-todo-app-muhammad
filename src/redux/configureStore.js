import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
// import filterReducer from "./reducers/filters";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

// const store = () => {
//   const store = createStore(
//     applyMiddleware(sagaMiddleware),
//     combineReducers({ todos: todosReducer, filters: filterReducer }),
//   );
//   sagaMiddleware.run(rootSaga);
//   return store;
// };

const store = compose(
  applyMiddleware(sagaMiddleware),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
