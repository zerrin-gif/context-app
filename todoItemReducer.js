export const todoItemReducer = (state, action) => {
  switch (action.type) {
    case 'addItem':
      return [...state, {title:action.title, id: Date.now()}];
    case 'removeItem':
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error();
  }
}