import { useContext } from 'react'
import { ThemeContext } from './Theme'
import * as styles from './styles.module.css'

export function Normal({ children }) {
  const [currentTheme] = useContext(ThemeContext)

  return <div className={styles[currentTheme]}>{children}</div>
}
