import { useClasses } from '../../hooks/'
import * as styles from './styles.module.css'

export function Button({ text, look, contained, type, ...buttonProps }) {
  const classNames = useClasses(
    [styles.button, contained && styles.contained, look],
    [look, contained],
  )

  return (
    <button type={type || 'submit'} className={classNames} {...buttonProps}>
      {text}
    </button>
  )
}
