import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

function Titlebar() {
  const {isLightTheme, lightTheme, darkTheme, toggleTheme} = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <div className='title-bar' style={{backgroundColor: theme.titleBar, color: theme.text}}>
      <div className='branding'>Todo App</div>
      <i className="fas fa-moon" onClick={toggleTheme}></i>
    </div>
  )
}

export default Titlebar;