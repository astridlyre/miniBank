import { multi, method } from '@ebflat9/fp'
import { useDispatch } from '../../hooks/'
import { actionDepositFunds, actionWithdrawFunds } from '../../store/actions'
import { useState, useCallback } from 'react'
import { Button } from '../Button/'
import { AccountActionsForm } from '../AccountActionsForm/'
import * as styles from './styles.module.css'

const WITHDRAWL_ACTION = { text: 'Withdraw', type: 'withdraw' }
const DEPOSIT_ACTION = { text: 'Deposit', type: 'deposit' }

const performFundsAction = multi(
  method(({ action }) => action === WITHDRAWL_ACTION, actionWithdrawFunds),
  method(({ action }) => action === DEPOSIT_ACTION, actionDepositFunds),
)

export function AccountActions({ id }) {
  const dispatch = useDispatch()
  const [action, setAction] = useState(WITHDRAWL_ACTION)
  const [show, setShow] = useState(false)

  const setWidthdrawl = useCallback(() => {
    setAction(WITHDRAWL_ACTION)
    setShow(true)
  }, [])

  const setDeposit = useCallback(() => {
    setAction(DEPOSIT_ACTION)
    setShow(true)
  }, [])

  const cancel = useCallback(() => setShow(false), [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      const { amount } = Object.fromEntries(new FormData(event.target))
      dispatch(
        performFundsAction({ action, id, amount: Number.parseInt(amount, 10) }),
      )
      event.target.reset()
    },
    [id, dispatch, action],
  )

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Button
          type='button'
          text='Make a withdrawl'
          look='tertiary'
          onClick={setWidthdrawl}
        />
        <Button type='button' text='Make a deposit' onClick={setDeposit} />
      </header>
      <AccountActionsForm
        show={show}
        action={action}
        cancel={cancel}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
