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

export const updateTodo = (id, update) => {
  return {
    type: types.UPDATE_TODO,
    id,
    update,
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
