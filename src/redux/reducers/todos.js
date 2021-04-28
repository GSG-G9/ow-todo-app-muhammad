import { v4 as uuidv4 } from "uuid";

import * as types from "../types";

const todoState = {
  todos: [],
  loading: true,
  error: "",
  lightMode: false,
};

const todoReducer = (state = todoState, action) => {
  switch (action.type) {
    case types.GET_TODOS_REQUESTED:
      return { ...state, loading: true };
    case types.GET_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.todos };
    case types.GET_TODOS_FAILED:
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
      return { ...state, todos: todosWithNew };
    case types.REMOVE_TODO:
      let todoAfterRemoved = state.todos.filter(({ id }) => id !== action.id);
      return { ...state, todos: todoAfterRemoved };
    case types.REMOVE_COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed === false),
      };
    case types.UPDATE_TODO:
      for (const key in state) {
        if (key === "todos") {
          const todosArr = state.todos.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, content: action.content };
            } else {
              return todo;
            }
          });
          state["todos"] = todosArr;
        }
      }
      return state;
    case types.TOGGLE_COMPLETE_TODO:
      for (const key in state) {
        if (key === "todos") {
          const todosArr = state.todos.map((todo) => {
            if (todo.id === action.id) {
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
      return { ...state, lightMode: !action.lightMode };
    case types.EMPTY_ERROR_INPUT:
      return { ...state, error: action.message };
    default:
      return state;
  }
};

export default todoReducer;
