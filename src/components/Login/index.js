import { nanoid } from '@ebflat9/fp'
import { useCallback, useEffect } from 'react'
import { useDispatch, useDependency } from '../../hooks/'
import { login } from '../../store/actionCreators'
import { AnimatePresence, motion } from 'framer-motion'
import { LabeledInput } from '../LabeledInput/'
import { Button } from '../Button/'
import * as styles from './styles.module.css'

const TEST_ACCOUNTS = [
  {
    type: 'Chequing',
    currency: 'CAD',
    amount: 4567.76,
    id: nanoid(),
  },
  {
    type: 'Savings',
    currency: 'CAD',
    amount: 24583.43,
    id: nanoid(),
  },
  {
    type: 'RRSP High Interest Account',
    currency: 'CAD',
    amount: 54583.43,
    id: nanoid(),
  },
]

const variants = { a: { opacity: 0, y: -25 }, b: { opacity: 1, y: 0 } }
const transition = { duration: 0.5, type: 'spring' }

export function Login() {
  const dispatch = useDispatch()
  const { user } = useDependency('user')

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      const loginInfo = Object.fromEntries(new FormData(event.target))
      event.target.reset()
      dispatch(login({ name: loginInfo.username, accounts: TEST_ACCOUNTS }))
    },
    [dispatch],
  )

  useEffect(() => user && dispatch(login(user)))

  return (
    <AnimatePresence>
      <motion.form
        variants={variants}
        initial='a'
        animate='b'
        exit='a'
        transition={transition}
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <h3 className={styles.formTitle}>
          Login to miniBank&nbsp;<span className={styles.icon}>🏦</span>
        </h3>
        <div className={styles.inputs}>
          <LabeledInput label='Username' type='text' name='username' required />
          <LabeledInput
            label='Password'
            type='password'
            name='password'
            required
          />
        </div>
        <Button contained text='login' name='login' />
      </motion.form>
    </AnimatePresence>
  )
}
