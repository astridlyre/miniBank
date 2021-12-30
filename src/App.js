import * as styles from './App.module.css'
import { Login } from './components/Login/'
import { Dashboard } from './components/Dashboard/'
import { useStore } from './hooks'

export function App() {
  const user = useStore((state) => state.user)
  return (
    <main className={styles.root}>
      {!user && <Login />}
      {user && <Dashboard user={user} />}
    </main>
  )
}
