import { useMemo, useContext } from 'react'
import { THEMES, ThemeContext } from './Theme'
import { ThemeSelector } from './ThemeSelector'
import * as styles from './styles.module.css'

export function ThemeSwitcher() {
  const [, setCurrentTheme] = useContext(ThemeContext)
  const themes = useMemo(
    () => THEMES.map((theme) => [theme, () => setCurrentTheme(theme)]),
    [setCurrentTheme],
  )

  return (
    <div className={styles.switcher}>
      <h5 className={styles.switcherTitle}>Theme Selector</h5>
      <ul className={styles.switcherUl}>
        {themes.map(([theme, onClick], i) => (
          <ThemeSelector key={i} theme={theme} onClick={onClick} />
        ))}
      </ul>
    </div>
  )
}
