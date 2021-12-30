export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const actionLogin = (user) => ({ type: LOGIN, payload: user })
export const actionLogout = () => ({ type: LOGOUT })
