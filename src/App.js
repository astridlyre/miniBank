import * as styles from './App.module.css'
import { Login } from './components/Login/'
import { Dashboard } from './components/Dashboard/'
import { useStore } from './hooks'
import { ErrorBoundary } from './errors'

const selectUser = (state) => state.user

export function App() {
  const user = useStore(selectUser)

  return (
    <main className={styles.root}>
      <ErrorBoundary>
        {!user && <Login />}
        {user && <Dashboard user={user} />}
      </ErrorBoundary>
    </main>
  )
}
