import React, { useState } from "react";

import { ReactComponent as CrossIcon } from '../../images/CrossIcon.svg';
import { ReactComponent as CheckIcon } from '../../images/icon-check.svg';

import './style.css';

const Todo = ({ remove, update, id, toggleTodo, task: lastTask, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(lastTask);

  const handleRemove = () => {
    console.log("object");
    remove();
  };

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    //Take New Task Data and Pass Up To Parent
    update(id, task);
    setIsEditing(false);
  };

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input type="text" name="task" value={task} onChange={handleChange} />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li onDoubleClick={toggleForm}>
          <div className="toggle-completed">
            {true && <CheckIcon className="check-icon" />}
            <input type="checkbox" onClick={handleToggle} />
          </div>
          <div className="Todo-text">{task}</div>
          <button className="Todo-remove-btn" onClick={handleRemove}>
            <CrossIcon className="cross-icon" />
          </button>
        </li>
      </div>
    );
  }
  return result;
};

export default Todo;
