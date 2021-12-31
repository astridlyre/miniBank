export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const WITHDRAW_FUNDS = 'WITHDRAW_FUNDS'
export const DEPOSIT_FUNDS = 'DEPOSIT_FUNDS'

export const actionLogin = (user) => ({ type: LOGIN, payload: user })
export const actionLogout = () => ({ type: LOGOUT })

export const actionWithdrawFunds = ({ id, amount } = {}) => ({
  type: WITHDRAW_FUNDS,
  payload: { id, amount },
})

export const actionDepositFunds = ({ id, amount } = {}) => ({
  type: DEPOSIT_FUNDS,
  payload: { id, amount },
})
