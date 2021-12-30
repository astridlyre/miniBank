import { useContext } from 'react'
import { StoreContext } from '../store/'

export function useStore(selector) {
  const [store] = useContext(StoreContext)

  return selector(store)
}
