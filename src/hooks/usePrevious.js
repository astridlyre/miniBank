import { useState, useCallback, useMemo } from 'react'

export function usePrevious(initialState) {
  const [state, setState] = useState({
    currentState: initialState,
    previousState: null,
  })

  const setter = useCallback((newState) => {
    setState((currentState) => {
      if (currentState !== newState) {
        return {
          currentState: newState,
          previousState: currentState,
        }
      }
      return currentState
    })
  }, [])

  return useMemo(() => {
    return [state.previousState, setter]
  }, [state.previousState, setter])
}
