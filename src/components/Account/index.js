import * as styles from './styles.module.css'

export function Account({ type, currency, amount }) {
  return (
    <li className={styles.root}>
      <h4 className={styles.accountType}>{type}</h4>
      <p className={styles.accountBalance}>
        Account Balance: <span className={styles.accountAmount}>{amount}</span>{' '}
        <small className={styles.accountCurrency}>{currency}</small>
      </p>
    </li>
  )
}
