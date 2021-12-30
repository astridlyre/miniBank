import { useContext } from 'react'
import { StoreContext } from '../store/'

export function useDispatch() {
  const [, dispatch] = useContext(StoreContext)

  return dispatch
}
