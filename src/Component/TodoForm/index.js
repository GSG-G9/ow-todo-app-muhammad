import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import './style.css';

const NewTodoForm = ({addTodo}) => {
  const [task, setTask] = useState('');

  const handleChange = (evt) => {
    setTask(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({
      todo_content: task,
      todo_id: uuidv4(),
      completed: false,
      created_on: Date.now(),
      last_update: Date.now(),
    });
    setTask("");
  }

    return (
      <div className="NewTodoForm">
        <form className="NewTodoForm-form" onSubmit={handleSubmit}>
          <label className="input-task-label" htmlFor="task">New Todo</label>
          <button className="add-task-btn"></button>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="New Todo..."
            value={task}
            onChange={handleChange}
          />
        </form>
      </div>
    );
}

export default NewTodoForm;
