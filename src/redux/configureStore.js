import { createStore, combineReducers } from "redux";
import todoReducer from './reducers/todos';
import filterReducer from './reducers/filters';

const store =  () => {
  const store = createStore(
    combineReducers({todoReducer, filterReducer})
  );
  return store;
};

export default store;
