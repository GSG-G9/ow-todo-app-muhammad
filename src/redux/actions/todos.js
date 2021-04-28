import * as types from '../types';

export const getTodos = () => {
  return {
    type: types.GET_TODOS_REQUESTED,
  }
}

export const addTodo = (content) => {
  return {
    type: types.ADD_TODO,
    content
  };
};

export const removeTodo = (id) => {
  return {
    type: types.REMOVE_TODO,
    id,
  }
}

export const removeAllTodos = () => {
  return {
    type: types.REMOVE_COMPLETED_TODOS,
  }
}

export const updateTodo = (id, content) => {
  return {
    type: types.UPDATE_TODO,
    id,
    content,
  }
}

export const toggleCompleteTodo = (id, completed) => {
  return {
    type: types.TOGGLE_COMPLETE_TODO,
    id,
    completed,
  }
}

export const toggleLightMode = (lightMode) => {
  return {
    type: types.TOGGLE_LIGHT_MODE,
    lightMode,
  }
}

export const errorEmptyInput = (message) => {
  return {
    type: types.EMPTY_ERROR_INPUT,
    message,
  }
}
