import { useContext, useCallback } from 'react'
import { StoreContext } from '../store/'

export function useDispatch() {
  const [state, dispatch] = useContext(StoreContext)
  const getState = useCallback(() => state, [state])

  return useCallback(
    (action) => action(dispatch, getState),
    [dispatch, getState],
  )
}
