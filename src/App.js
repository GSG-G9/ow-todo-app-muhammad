import React from "react";
import { Provider } from "react-redux";

import configureStore from './redux/configureStore';

import TodoList from "./Component/TodoList/index";
import "./App.css";

const store = configureStore;

console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-bg"></div>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
