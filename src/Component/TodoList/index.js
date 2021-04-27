import React from "react";

import TodoForm from "../TodoForm/index";

import './style.css';

const TodoList = () => {
  const todosList = [];
  return (
    <div className="TodoList">
      <div className="TodoList-header">
      <h1>
        TODO
      </h1>
      <i class="fas fa-sun"></i>
      </div>
      <ul>{todosList}</ul>
      <TodoForm />
    </div>
  );
};

export default TodoList;
