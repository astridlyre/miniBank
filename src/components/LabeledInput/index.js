import { useMemo } from 'react'
import { nanoid } from '@ebflat9/fp'
import * as styles from './styles.module.css'

export function LabeledInput({ label, horizontal, vertical, ...inputProps }) {
  const id = useMemo(() => nanoid(), [])

  return (
    <label
      htmlFor={id}
      className={`${styles.label} ${
        horizontal ? styles.horizontal : styles.vertical
      }`}
    >
      <span className={styles.labelText}>{label}</span>
      <input className={styles.input} {...inputProps} id={id} />
    </label>
  )
}
