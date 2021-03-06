import { useState, useCallback } from 'react'
import { Account } from '../Account/'
import * as styles from './styles.module.css'

export function Accounts({ accounts }) {
  const [expanded, setExpanded] = useState(null)
  const onUpdate = useCallback(
    (id, state) => (state.expanded ? setExpanded(id) : setExpanded(null)),
    [setExpanded],
  )

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Your Accounts</h3>
      <div className={styles.ul}>
        {accounts.map((account) => (
          <Account
            key={account.id}
            {...account}
            expanded={expanded === account.id}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </section>
  )
}
