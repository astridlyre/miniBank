import { createContext, useState, useRef, useContext, useCallback } from 'react'
import { useClasses } from '../../hooks/'
import { AnimatePresence, motion } from 'framer-motion'
import { nanoid } from '@ebflat9/fp'
import * as styles from './styles.module.css'

const variants = { a: { opacity: 0, scale: 0.9 }, b: { opacity: 1, scale: 1 } }
const transition = { duration: 0.2, type: 'spring' }

const ExpandableContext = createContext({ expanded: false })

function Header({ children, title, className }) {
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

function Content({ children, className }) {
  const [state] = useContext(ExpandableContext)
  const classNames = useClasses([styles.content, className], [className])

  return (
    <AnimatePresence>
      {state.expanded && (
        <motion.section
          variants={variants}
          transition={transition}
          initial='a'
          animate='b'
          className={classNames}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}

const createInitialStateFromProp = (value, expandableId) => ({
  expanded: !!value,
  expandableId,
})

export function Expandable({ children, className, initialState }) {
  const expandableId = useRef(nanoid())
  const [state, setState] = useState(
    createInitialStateFromProp(initialState, expandableId),
  )

  const toggle = useCallback(
    () =>
      setState((previousState) => ({
        ...previousState,
        expanded: !previousState.expanded,
      })),
    [setState],
  )

  return (
    <ExpandableContext.Provider value={[state, toggle]}>
      <div className={className}>{children}</div>
    </ExpandableContext.Provider>
  )
}

Expandable.Header = Header
Expandable.Content = Content
