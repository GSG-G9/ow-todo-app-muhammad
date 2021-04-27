const todoState = [];
const todoReducer = (state = todoState, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      return [...state, action.todo];
    case "REMOVE_TODO":
      return state.filter(({ id }) => id !== action.id);
    case "UPDATE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, ...action.update };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todoReducer;
