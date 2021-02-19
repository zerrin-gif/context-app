import React, {createContext, useReducer} from 'react';
import {todoItemReducer} from '../reducers/todoItemReducer';

export const TodoItemsContext = createContext();

function TodoItemsContextProvider (props) {

  const [items, dispatch] = useReducer(todoItemReducer, []);

  // const [items, setItems] = useState([]);

  // const addItem = (title) => {
  //   setItems([...items, {title:title, id: Date.now()}])
  // }

  // const removeItem = (id) => {
  //   const newArray = items.filter((item) => item.id !== id);
  //   setItems(newArray)
  // }

  return (
    <TodoItemsContext.Provider value={{items, dispatch/*addItem: addItem, removeItem: removeItem*/}}>
      {props.children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemsContextProvider;