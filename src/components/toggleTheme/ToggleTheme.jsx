import React, { useContext } from 'react'
import { ThemeContext } from '../services/theme/theme.context'
import { Button } from 'react-bootstrap';
import { LIGHT_THEME } from '../services/consts/themeConsts';

const ToggleTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button className="ms-5" onClick={toggleTheme}>
        Cambiar a {theme === LIGHT_THEME ? "Oscuro" : "Claro"}
    </Button>
  )
}

export default ToggleTheme