import React, { useContext } from 'react'
import { ThemeContext } from '../services/theme/theme.context'
import { Button } from 'react-bootstrap';
import { LIGHT_THEME } from '../services/consts/themeConsts';
import useTranslation from '../../hooks/useTranslate/useTranslation';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const t = useTranslation();
  return (
    <Button className="ms-5" onClick={toggleTheme}>
      {theme === LIGHT_THEME ? t('dark_theme_change') : t('light_theme_change')}
    </Button>
  )
}

export default ToggleTheme