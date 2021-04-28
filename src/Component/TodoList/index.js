import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

import { getTodos, toggleLightMode } from '../../redux/actions/todos';

import TodoForm from "../TodoForm/index";
import Todo from "../Todo";
import TodoFooter from "../TodoFooter";
import Alert from "../Alert";
import { ReactComponent as MoonIcon } from "../../images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../images/icon-sun.svg";
import "./style.css";

const TodoList = () => {
  const [checkState, setCheckState] = useState("all");
  const todos = useSelector((state) => state.todos.todos || []);
  const loading = useSelector((state) => state.todos.loading);
  const lightMode = useSelector((state) => state.todos.lightMode);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleChecked = (e) => {
    setCheckState(e.target.value);
  };

  const toggleDarkMode = (lightModeState) => {
    dispatch(toggleLightMode(lightModeState));
  };

  const todosList = todos.length > 0 && todos.filter(x => {
    if(checkState === "all") return x;
    if(checkState === "active") return x.completed === false;
    return x.completed === true;
  }).map(({ id, content, completed }) => (
    <Todo
      key={id}
      content={content}
      completed={completed}
      id={id}
    />
  ));

  return (
    <div className="TodoList">
      {loading && "Loading..."}
      {error && <Alert message={error} duration={5000} />}
      <div className="TodoList-header">
        <h1>TODO</h1>
        {lightMode ? (
          <MoonIcon onClick={() => toggleDarkMode(true)} className="sun-icon" />
        ) : (
          <SunIcon onClick={() => toggleDarkMode(false)} className="moon-icon" />
        )}
      </div>
      <TodoForm />
      <div className={`TodoList-container ${lightMode && "light-mode" }`}>
        <div className="TodoList-todos">
          <ul>{todosList}</ul>
          {todos.length === 0 && <p className="no-todo-msg">You don't have any Todos!</p>}
        </div>
        <TodoFooter handleChecked={handleChecked} checkState={checkState} />
      </div>
    </div>
  );
};

export default TodoList;
