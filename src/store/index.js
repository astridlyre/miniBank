import { useReducer, createContext } from 'react'
import { LOGIN, LOGOUT, UPDATE_USER } from './actions'

export const StoreContext = createContext({})

const initialState = {
  user: null,
}

function storeReducer(state, action) {
  switch (action.type) {
    case LOGIN:
    case UPDATE_USER:
      return { ...state, user: action.payload }
    case LOGOUT:
      return { ...state, user: null }
    default:
      return state
  }
}

export function Store({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialState)
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}
