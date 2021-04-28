import { v4 as uuidv4 } from 'uuid';

import * as types from "../types";

const todoState = {
  todos: [],
  loading: true,
  error: "",
  lightMode: false,
};

const todoReducer = (state = todoState, action) => {
  console.log("state", state);
  switch (action.type) {
    case types.GET_TODOS_REQUESTED:
      console.log(state);
      return { ...state, loading: true };
    case types.GET_TODOS_SUCCESS:
      console.log(state);
      return { ...state, loading: false, todos: action.todos };
    case types.GET_TODOS_FAILED:
      console.log(state);
      return { ...state, loading: false, error: action.message };
    case types.ADD_TODO:
      const todosWithNew = [
        ...state.todos,
        {
          id: uuidv4(),
          content: action.content,
          completed: false,
          createdOn: Date.now(),
          lastUpdate: Date.now(),
        },
      ];
      return {...state, todos: todosWithNew};
    case types.REMOVE_TODO:
      let todoAfterRemoved = state.todos.filter(({ id }) => id !== action.id);
      console.log("removed", action);
      return { ...state, todos: todoAfterRemoved };
    case types.UPDATE_TODO:
      return state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, ...action.update };
        } else {
          return todo;
        }
      });
    case types.TOGGLE_COMPLETE_TODO:
      for (const key in state) {
        if (key === "todos") {
          const todosArr = state.todos.map((todo) => {
            if (todo.id === action.id) {
              console.log(todo);
              return { ...todo, completed: !action.completed };
            } else {
              return todo;
            }
          });
          state["todos"] = todosArr;
        }
      }
      return state;
    case types.TOGGLE_LIGHT_MODE:
      console.log(action.lightMode);
      return { ...state, lightMode: !action.lightMode };
    default:
      return state;
  }
};

export default todoReducer;
