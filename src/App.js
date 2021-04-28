import React from "react";
import { useSelector } from "react-redux";

import TodoList from "./Component/TodoList/index";
import "./App.css";

function App() {
  const lightMode = useSelector((state) => state.todos.lightMode);
  return (
    <div className={`App ${lightMode && "light-mode"}`}>
      <div className="App-bg"></div>
      <TodoList />
    </div>
  );
}

export default App;
