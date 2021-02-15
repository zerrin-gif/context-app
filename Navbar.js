import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

function Navbar() {
  const {toggleAuth, isLoggedIn} = useContext(AuthContext);
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <ul className="navbar" style={{backgroundColor: theme.nav, color: theme.text}}>
      <li>Home</li>
      <li>About</li>
      <li onClick={toggleAuth}>{isLoggedIn ? 'Logout' : 'Login'}</li>
    </ul>
  )
}

export default Navbar;