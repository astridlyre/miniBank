import { useContext, useMemo } from 'react'
import { StoreContext } from '../store/'

export function useStore(selector) {
  const [store] = useContext(StoreContext)

  return useMemo(() => selector(store), [store, selector])
}
