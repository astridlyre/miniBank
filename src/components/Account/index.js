import { useMemo } from 'react'
import { ErrorBoundary } from '../../errors/'
import { Expandable } from '../Expandable/'
import { AccountActions } from '../AccountActions/'
import { Header } from './Header'
import * as styles from './styles.module.css'

export function Account({ type, currency, amount, id }) {
  return useMemo(
    () => (
      <ErrorBoundary>
        <Expandable className={styles.root}>
          <Expandable.Header className={styles.accountHeader}>
            <Header type={type} currency={currency} amount={amount} />
          </Expandable.Header>
          <Expandable.Content>
            <AccountActions id={id} amount={amount} />
          </Expandable.Content>
        </Expandable>
      </ErrorBoundary>
    ),
    [type, currency, amount, id],
  )
}
