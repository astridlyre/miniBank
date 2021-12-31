import { useReducer, createContext } from 'react'
import { DEPOSIT_FUNDS, LOGIN, LOGOUT, WITHDRAW_FUNDS } from './actions'
import { add, subtract } from '@ebflat9/fp'
import { strategy } from '../services/'

export const StoreContext = createContext({})

const initialState = {
  user: null,
}

function alterAccountFunds(fn) {
  return (state, funds) => ({
    ...state,
    user: {
      ...state.user,
      accounts: state.user.accounts.map((account) =>
        account.id === funds.id
          ? { ...account, amount: fn(account.amount, funds.amount) }
          : account,
      ),
    },
  })
}

function storeReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      strategy('user').save('user', action.payload)
      return { ...state, user: action.payload }
    case LOGOUT:
      strategy('user').remove('user')
      return { ...state, user: null }
    case WITHDRAW_FUNDS: {
      const newState = alterAccountFunds(subtract)(state, action.payload)
      strategy('user').save('user', newState.user)
      return newState
    }
    case DEPOSIT_FUNDS: {
      const newState = alterAccountFunds(add)(state, action.payload)
      strategy('user').save('user', newState.user)
      return newState
    }
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
