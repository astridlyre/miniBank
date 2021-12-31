import { useClasses } from '../../hooks/'
import { useMemo } from 'react'
import { nanoid } from '@ebflat9/fp'
import * as styles from './styles.module.css'

export function LabeledInput({
  label,
  horizontal,
  contained,
  className,
  ...inputProps
}) {
  const id = useMemo(() => nanoid(), [])
  const inputClasses = useClasses([styles.input, className], [className])
  const labelClasses = useClasses(
    [
      styles.label,
      horizontal ? styles.horizontal : styles.vertical,
      contained && styles.contained,
    ],
    [(horizontal, contained)],
  )

  return (
    <label htmlFor={id} className={labelClasses}>
      <span className={styles.labelText}>{label}</span>
      <input className={inputClasses} {...inputProps} id={id} />
    </label>
  )
}
