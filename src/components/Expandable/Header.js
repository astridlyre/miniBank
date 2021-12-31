import * as styles from './styles.module.css'
import { useContext } from 'react'
import { useClasses } from '../../hooks/'
import { ExpandableContext } from './Expandable'

export function Header({ children, title, className }) {
  const [state, toggle] = useContext(ExpandableContext)
  const classNames = useClasses([styles.header, className], [className])

  return (
    <button
      type='button'
      aria-controls={state.expandableId}
      aria-expanded={state.expanded}
      className={classNames}
      onClick={toggle}
      title={title}
    >
      {children}
    </button>
  )
}
