import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { toggleCompleteTodo, removeTodo, updateTodo } from '../../redux/actions/todos';

import { ReactComponent as CrossIcon } from '../../images/CrossIcon.svg';
import { ReactComponent as CheckIcon } from '../../images/icon-check.svg';

import './style.css';

const Todo = ({ id, content: lastTask, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(lastTask);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("ID: ", id);
    dispatch(removeTodo(id));
  };

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    dispatch(updateTodo(id, content));
    setIsEditing(false);
    // setContent("");
  };

  const handleChange = (evt) => {
    setContent(evt.target.value);
  };

  const handleToggle = (id, completed) => {
    dispatch(toggleCompleteTodo(id, completed));
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input type="text" name="task" value={content} onChange={handleChange} />
          <button className="save-edit-btn" type="submit">Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li onDoubleClick={toggleForm}>
          <div className={`toggle-completed ${completed && 'completed'}`}>
            {completed && <CheckIcon className="check-icon" />}
            <input type="checkbox" onClick={() => handleToggle(id, completed)} />
          </div>
          <div className={`Todo-text ${completed && 'strike-line'}`}>{content}</div>
          <button className="Todo-remove-btn" onClick={() => handleRemove(id)}>
            <CrossIcon className="cross-icon" />
          </button>
        </li>
      </div>
    );
  }
  return result;
};

export default Todo;
