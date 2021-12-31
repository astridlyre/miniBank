import { useMemo, useContext } from 'react'
import { ThemeContext, INVERT_THEME_MAP } from './Theme'
import * as styles from './styles.module.css'

export function Invert({ children }) {
  const [currentTheme] = useContext(ThemeContext)
  const inverted = useMemo(() => INVERT_THEME_MAP[currentTheme], [currentTheme])

  return <div className={styles[inverted || currentTheme]}>{children}</div>
}
