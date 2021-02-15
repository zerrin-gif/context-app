import React, {useContext, useState} from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
import {TodoItemsContext} from '../contexts/TodoItemsContext';

function TodoList() {
    const [title, setTitle] = useState('');
    const {items, dispatch} = useContext(TodoItemsContext);
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? lightTheme : darkTheme;

    const handleInput = (e) => {
      setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      // addItem(title);
      dispatch({type: 'addItem', title: title})
      setTitle('')
    }

    return (
      <div className='todolist' style={{backgroundColor: theme.body, color: theme.text}}>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput} value={title}/>
        </form>
        <ul>
          {items.map(item => {
            return <li key={item.id} style={{backgroundColor: theme.nav}} onClick={() => dispatch({type: 'removeItem', id: item.id})}>{item.title}</li>
          })}
        </ul>
      </div>
    )
}

export default TodoList;