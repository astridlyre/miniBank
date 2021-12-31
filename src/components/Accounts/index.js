import { useCallback, useState } from 'react'
import { Account } from '../Account/'
import * as styles from './styles.module.css'

export function Accounts({ accounts }) {
  const [expanded, setExpanded] = useState(null)

  const onUpdate = useCallback((nextState, id) => {
    setExpanded(id)
    return nextState
  }, [])

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Your Accounts</h3>
      <div className={styles.ul}>
        {accounts.map((account) => (
          <Account
            key={account.id}
            {...account}
            expanded={expanded === account.id}
            id={account.id}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </section>
  )
}
