import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/actions/todos";
import "./style.css";

const NewTodoForm = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    setContent(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      addTodo(content)
    );
    setContent("");
  };

  return (
    <div className="NewTodoForm">
      <form className="NewTodoForm-form" onSubmit={handleSubmit}>
        <label className="input-task-label" htmlFor="task">
          New Todo
        </label>
        <button className="add-task-btn" type="submit">+</button>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="New Todo..."
          value={content}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default NewTodoForm;
