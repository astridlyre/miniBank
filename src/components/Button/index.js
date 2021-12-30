import * as styles from './styles.module.css'

export function Button({ text, contained, type, ...buttonProps }) {
  return (
    <button
      type='submit'
      className={`${styles.button} ${contained ? styles.contained : ''}`}
      {...buttonProps}
    >
      {text}
    </button>
  )
}
