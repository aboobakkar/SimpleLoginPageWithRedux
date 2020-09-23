import { Alert } from 'react-native'
import * as types from './constants'
import { actions } from '../'

/**
 * Sign in.
 * @param {string} username 
 * @param {string} password
 */
export const login = (username: string, password: string) => {
  // async call
  return dispatch => {
    // turn loading animation on
    // by dispacthing `loading` action from module `app`.
    // yes, each action can interact with another module actions.
    dispatch(actions.app.loading())

    // simulate ajax login
    // in real world you can use `fetch` to make ajax request.
    setTimeout(() => {
      if (username === 'hruday@gmail.com' && password === 'hruday123') {
        dispatch({
          type: types.LOGIN,
          payload: {
            userId: username,
            fullName: 'Hruday'
          }
        })
      } else {
        Alert.alert('Invalid User')
      }

      // turn loading animation off
      dispatch(actions.app.loading(false))
    }, 2000)
  }
}

/**
 * Sign out.
 */
export const logout = () => {
  // direct/sync call
  return {
    type: types.LOGOUT
  }
}