import { useState, useMemo, useContext, useCallback } from 'react'
import { motion } from 'framer-motion'
import { THEMES, ThemeContext } from './Theme'
import { ThemeSelector } from './ThemeSelector'
import { Icon } from './Icon'
import * as styles from './styles.module.css'

const variants = {
  a: { x: 10, opacity: 0 },
  b: { x: 0, opacity: 1 },
}
const transition = { duration: 0.2, type: 'spring' }

export function ThemeSwitcher() {
  const [, setCurrentTheme] = useContext(ThemeContext)
  const [isShowing, setIsShowing] = useState(false)
  const themes = useMemo(
    () =>
      THEMES.map((theme) => [
        theme,
        () => (setCurrentTheme(theme), setIsShowing(false)),
      ]),
    [setCurrentTheme, setIsShowing],
  )

  const toggle = useCallback(
    () => (console.log(isShowing), setIsShowing((s) => !s)),
    [setIsShowing, isShowing],
  )

  return (
    <div className={styles.switcher}>
      <button type='button' onClick={toggle} className={styles.switcherButton}>
        <Icon isShowing={isShowing} className={styles.switchIcon} />
      </button>
      {isShowing && (
        <motion.div
          variants={variants}
          transition={transition}
          initial='a'
          animate='b'
          className={styles.switcherButtons}
        >
          <h5 className={styles.switcherTitle}>Theme Selector</h5>
          <ul className={styles.switcherUl}>
            {themes.map(([theme, onClick], i) => (
              <ThemeSelector key={i} theme={theme} onClick={onClick} />
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}
