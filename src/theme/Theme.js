import { createContext, useMemo, useEffect, useState, useCallback } from 'react'
import { strategy } from '../services/'
import * as styles from './styles.module.css'

const INITIAL_THEME = 'blue'
const service = strategy('theme')

export const THEMES = ['light', 'dark', 'yellow', 'pink', 'blue']
export const ThemeContext = createContext(INITIAL_THEME)
export const INVERT_THEME_MAP = {
  light: 'dark',
  dark: 'light',
}

export function Theme({ children }) {
  const [currentTheme, setCurrentTheme] = useState(INITIAL_THEME)

  const setter = useCallback(
    (theme) => {
      setCurrentTheme(theme)
      service.save('theme', theme)
    },
    [setCurrentTheme],
  )

  const value = useMemo(() => [currentTheme, setter], [currentTheme, setter])

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await service.load('theme')
      if (storedTheme) {
        setCurrentTheme(storedTheme)
      }
    }
    loadTheme()
  }, [])

  return (
    <ThemeContext.Provider value={value}>
      <div className={styles[currentTheme]}>{children}</div>
    </ThemeContext.Provider>
  )
}
