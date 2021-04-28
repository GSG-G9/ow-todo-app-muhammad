import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import {
  removeAllTodos,
} from "../../redux/actions/todos";

import "./style.css";

const TodoFooter = ({ handleChecked, checkState }) => {
  const todos = useSelector((state) => state.todos.todos);
  const lightMode = useSelector((state) => state.todos.lightMode);
  const dispatch = useDispatch();

  return (
    <>
      <div className={`TodoList-footer ${lightMode && "light-mode"}`}>
        <div className="show-completed">
          {" "}
          {todos.filter((todo) => todo.completed === false).length} items left
        </div>
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
          <button
            className="clear-completed"
            onClick={() => dispatch(removeAllTodos())}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <div
        className={`filter-completed filter-completed__small_screen ${
          lightMode && "light-mode"
        }`}
      >
        <label htmlFor="all" className={`${checkState === "all" && "active"}`}>
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
    </>
  );
};

TodoFooter.propTypes = {
  handleChecked: PropTypes.func.isRequired,
  checkState: PropTypes.string.isRequired,
};

export default TodoFooter;
