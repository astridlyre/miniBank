import { LOGIN, LOGOUT, UPDATE_USER } from './actions'
import { strategy, APIService } from '../services/'

const actionLoginUser = (user) => ({ type: LOGIN, payload: user })
const actionLogoutUser = () => ({ type: LOGOUT })
const actionUpdateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
})

const login = (user) => async (dispatch) => {
  const userService = strategy('user')

  try {
    const savedUser = await userService.save('user', user)
    dispatch(actionLoginUser(savedUser))
  } catch (error) {
    console.error(error)
  }
}

const logout = () => async (dispatch) => {
  const userService = strategy('user')

  try {
    await userService.remove('user')
    dispatch(actionLogoutUser())
  } catch (error) {
    console.error(error)
  }
}

const withdrawFunds = (funds) => async (dispatch, getState) => {
  const userService = strategy('user')

  try {
    const updatedUser = await APIService.withdraw(getState(), funds)
    const savedUser = await userService.save('user', updatedUser)
    dispatch(actionUpdateUser(savedUser))
  } catch (error) {
    console.error(error)
  }
}

const depositFunds = (funds) => async (dispatch, getState) => {
  const userService = strategy('user')

  try {
    const updatedUser = await APIService.deposit(getState(), funds)
    const savedUser = await userService.save('user', updatedUser)
    dispatch(actionUpdateUser(savedUser))
  } catch (error) {
    console.error(error)
  }
}

export { login, logout, withdrawFunds, depositFunds }
