import React from "react";
import PropTypes from 'prop-types';

import './style.css';

const TodoFooter = ({handleChecked, checkState}) => {
  return (
    <div className="TodoList-footer">
      <div className="show-completed"> 5 items left</div>
      <div className="filter-completed">
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
      <div className="clear-completed">
        <button className="clear-completed">Clear Completed</button>
      </div>
    </div>
  );
}

TodoFooter.propTypes = {
  handleChecked: PropTypes.func.isRequired,
  checkState: PropTypes.string.isRequired,
}


export default TodoFooter;
