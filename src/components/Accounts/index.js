import { Account } from '../Account/'
import * as styles from './styles.module.css'

export function Accounts({ accounts }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Your Accounts</h3>
      <div className={styles.ul}>
        {accounts.map((account) => (
          <Account key={account.id} {...account} />
        ))}
      </div>
    </section>
  )
}
