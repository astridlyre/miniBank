import { AnimatePresence, motion } from 'framer-motion'
import { useCallback } from 'react'
import { useDispatch } from '../../hooks/'
import { actionLogout } from '../../store/actions'
import { Button } from '../Button/'
import { Accounts } from '../Accounts/'
import * as styles from './styles.module.css'

const variants = {
  a: {
    opacity: 0,
    y: -10,
  },
  b: {
    opacity: 1,
    y: 0,
  },
}

const transition = { duration: 0.2 }

export function Dashboard({ user }) {
  const dispatch = useDispatch()
  const logout = useCallback(() => dispatch(actionLogout()), [dispatch])

  return (
    <AnimatePresence>
      <motion.main
        variants={variants}
        initial='a'
        animate='b'
        exit='a'
        transition={transition}
        className={styles.main}
      >
        <header className={styles.header}>
          <h2 className={styles.title}>Dashboard</h2>
          <p className={styles.welcome}>Welcome back, {user.name}!</p>
          <Button type='button' onClick={logout} text='logout' />
        </header>
        <section>
          <Accounts accounts={user.accounts} />
        </section>
      </motion.main>
    </AnimatePresence>
  )
}
