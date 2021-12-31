import { createContext, useMemo, useState } from 'react'
import * as styles from './styles.module.css'

export const THEMES = ['light', 'dark', 'yellow', 'pink', 'blue']

export const INVERT_THEME_MAP = {
  light: 'dark',
  dark: 'light',
}

const INITIAL_THEME = 'blue'

export const ThemeContext = createContext(INITIAL_THEME)

export function Theme({ children }) {
  const [currentTheme, setCurrentTheme] = useState(INITIAL_THEME)

  const value = useMemo(
    () => [currentTheme, setCurrentTheme],
    [currentTheme, setCurrentTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      <div className={styles[currentTheme]}>{children}</div>
    </ThemeContext.Provider>
  )
}
