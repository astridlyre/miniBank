import * as styles from './Header.module.css'

export function Header({ type, amount, currency }) {
  return (
    <>
      <h4 className={styles.accountType}>{type}</h4>
      <p className={styles.accountBalance}>
        Account Balance: <span className={styles.accountAmount}>{amount}</span>{' '}
        <small className={styles.accountCurrency}>{currency}</small>
      </p>
    </>
  )
}
