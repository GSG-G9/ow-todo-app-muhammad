import React, { useState } from "react";

import TodoForm from "../TodoForm/index";
import Todo from "../Todo";
import { ReactComponent as MoonIcon } from "../../images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../images/icon-sun.svg";
import "./style.css";

let todos = [
  {
    id: "t-1",
    content: "Task one",
    completed: false,
  },
  {
    id: "t-2",
    content: "Task one",
    completed: true,
  },
  {
    id: "t-3",
    content: "Task one",
    completed: false,
  },
  {
    id: "t-4",
    content: "Task one",
    completed: false,
  },
  {
    id: "t-5",
    content: "Task one",
    completed: false,
  },
  {
    id: "t-6",
    content: "Task one",
    completed: false,
  },
  {
    id: "t-7",
    content: "Task one",
    completed: false,
  },
];

const TodoList = () => {
  // const [todos, setTodos] = useState([]);
  const [checkState, setCheckState] = useState("all");
  const [darkMode, setDarkMode] = useState("all");

  const addTodo = (newTodo) => {
    // setTodos([...todos, newTodo]);
    todos = [...todos, newTodo];
  };

  const remove = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    todos = todos.filter((todo) => todo.id !== id);
  };

  const update = (id, updateTask) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    // setTodos(updateTodos);
    todos = updateTodos;
  };

  const toggleCompletion = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.todo_id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    // setTodos(updateTodos);
    todos = updateTodos;
  };

  const handleChecked = (e) => {
    console.log(e.target.value);
    setCheckState(e.target.value);
    // console.log(checkState);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const todosList = todos.map(({ id, content, completed }) => (
    <Todo
      key={id}
      task={content}
      completed={completed}
      id={id}
      remove={() => remove(id)}
      update={update}
      toggleTodo={toggleCompletion}
    />
  ));

  return (
    <div className="TodoList">
      <div className="TodoList-header">
        <h1>TODO</h1>
        {darkMode ? (
          <MoonIcon
            onClick={toggleDarkMode}
            className="sun-icon"
          />
        ) : (
          <SunIcon
            onClick={toggleDarkMode}
            className="moon-icon"
          />
        )}
      </div>
      <TodoForm addTodo={addTodo} />
      <div className={`TodoList-container ${darkMode ? "" : "light-mode"}`}>
        <div className="TodoList-todos">
          <ul>{todosList}</ul>
        </div>
        <div className="TodoList-footer">
          <div className="show-completed"> 5 items left</div>
          <div className="filter-completed">
            <label
              htmlFor="all"
              className={`${checkState === "all" && "active"}`}
            >
              All
              <input
                type="radio"
                name="state"
                id="all"
                value="all"
                onChange={handleChecked}
                checked={checkState === "all"}
              />
            </label>
            <label
              htmlFor="active"
              className={`${checkState === "active" && "active"}`}
            >
              Active
              <input
                type="radio"
                name="state"
                id="active"
                value="active"
                onChange={handleChecked}
                checked={checkState === "active"}
              />
            </label>
            <label
              htmlFor="completed"
              className={`${checkState === "completed" && "active"}`}
            >
              Completed
              <input
                type="radio"
                name="state"
                id="completed"
                value="completed"
                onChange={handleChecked}
                checked={checkState === "completed"}
              />
            </label>
          </div>
          <div className="clear-completed">
            <button className="clear-completed">Clear Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
