import { useReducer, createContext } from 'react'
import { LOGIN, LOGOUT } from './actions'

export const StoreContext = createContext({})

const initialState = {
  user: null,
}

function storeReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('user', JSON.stringify(action.payload))
      return { ...state, user: action.payload }
    case LOGOUT:
      localStorage.removeItem('user')
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
