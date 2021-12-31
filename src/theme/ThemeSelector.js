import * as styles from './styles.module.css'

export function ThemeSelector({ theme, onClick }) {
  return (
    <button type='button' onClick={onClick} className={styles.switcherButton}>
      {theme}
    </button>
  )
}
