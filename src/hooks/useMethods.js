import { useReducer, useCallback, useMemo } from 'react'

export function useMethods(methods, initialState) {
  const reducer = useCallback(
    (state, action) => methods[action.type](state, action.payload),
    [methods],
  )

  const [state, dispatch] = useReducer(reducer, initialState)

  const wrappedMethods = useMemo(() => {
    const actionTypes = Object.keys(methods)

    return actionTypes.reduce((acc, type) => {
      acc[type] = (payload) => dispatch({ type, payload })
      return acc
    }, {})
  }, [methods])

  return [state, wrappedMethods]
}
