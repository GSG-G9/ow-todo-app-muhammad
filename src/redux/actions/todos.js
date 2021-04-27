import { v4 as uuidv4 } from 'uuid';

export const addTodo = ({ content = "", completed = false } = {}) => {
  return {
    type: "ADD_NEW_TODO",
    todo: {
      id: uuidv4(),
      content,
      completed,
      created_on: Date.now(),
      last_update: Date.now(),
    }
  };
};

export const removeTodo = ({id}) => {
  return {
    type: 'REMOVE_TODO',
    id,
  }
}

export const updateTodo = (id, update) => {
  return {
    type: 'UPDATE_TODO',
    id,
    update,
  }
}
