import {
  LoginActionTypes,
  LoginResulted,
  LOGIN_INPUT_EMAIL,
  LOGIN_INPUT_PASSWORD,
  LOGIN_LOADING,
  SEND_LOGIN_REQUIEST,
  SEND_LOGIN_RESULTED
} from './action-type'

export const ChangeLoginEmail = (email: string): LoginActionTypes => ({
  type: LOGIN_INPUT_EMAIL,
  payload: {
    email
  }
})

export const ChangeLoginPassword = (password: string): LoginActionTypes => ({
  type: LOGIN_INPUT_PASSWORD,
  payload: {
    password
  }
})

export const SendLoginData = (
  email: string,
  password: string
): LoginActionTypes => ({
  type: SEND_LOGIN_REQUIEST,
  payload: {
    email,
    password
  }
})

export const SendLoginResult = (result: LoginResulted): LoginActionTypes => ({
  type: SEND_LOGIN_RESULTED,
  payload: result
})

export const IsLoginLoading = (isLoading: boolean): LoginActionTypes => ({
  type: LOGIN_LOADING,
  payload: {
    isLoading
  }
})
