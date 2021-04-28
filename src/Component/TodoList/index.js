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
  // const [todos, setTodos] = useState([]);
  const [checkState, setCheckState] = useState("all");
  const todos = useSelector((state) => state.todos.todos || []);
  const loading = useSelector((state) => state.todos.loading);
  const lightMode = useSelector((state) => state.todos.lightMode);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  // console.log("TodoList: ", todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // const remove = (id) => {
  //   // setTodos(todos.filter((todo) => todo.id !== id));
  //   // todos = todos.filter((todo) => todo.id !== id);
  // };

  // const update = (id, updateTask) => {
  //   const updateTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, task: updateTask };
  //     }
  //     return todo;
  //   });
  //   // setTodos(updateTodos);
  //   // todos = updateTodos;
  // };

  // const toggleCompletion = (id) => {
  //   const updateTodos = todos.map((todo) => {
  //     if (todo.todo_id === id) {
  //       return { ...todo, completed: !todo.completed };
  //     }
  //     return todo;
  //   });
  //   // setTodos(updateTodos);
  //   // todos = updateTodos;
  // };

  const handleChecked = (e) => {
    console.log(e.target.value);
    setCheckState(e.target.value);
    // console.log(checkState);
  };

  const toggleDarkMode = (lightModeState) => {
    dispatch(toggleLightMode(lightModeState));
  };

  const todosList = todos.length > 0 && todos.map(({ id, content, completed }) => (
    <Todo
      key={id}
      content={content}
      completed={completed}
      id={id}
    />
  ));

  return (
    <div className="TodoList">
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
