import * as styles from './styles.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { ExpandableContext } from './Expandable'
import { useClasses } from '../../hooks/'

const variants = { a: { opacity: 0, scale: 0.9 }, b: { opacity: 1, scale: 1 } }
const transition = { duration: 0.2, type: 'spring' }

export function Content({ children, className }) {
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
