import { AnimatePresence, motion } from 'framer-motion'
import { LabeledInput } from '../LabeledInput/'
import { Button } from '../Button/'
import * as styles from './styles.module.css'

const variants = { a: { opacity: 0, scale: 0.9 }, b: { opacity: 1, scale: 1 } }
const transition = { duration: 0.2, type: 'spring' }

export function AccountActionsForm({ action, show, handleSubmit, cancel }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.form
          variants={variants}
          transition={transition}
          initial='a'
          animate='b'
          className={styles.actionForm}
          onSubmit={handleSubmit}
        >
          <LabeledInput
            label='Amount'
            className={styles.input}
            contained
            type='number'
            min='0'
            max='999999999'
            defaultValue='0'
            step='0.01'
            required
            name='amount'
          />
          <Button text={action.text} look='tertiary' />
          <Button text='Cancel' type='button' onClick={cancel} />
        </motion.form>
      )}
    </AnimatePresence>
  )
}
