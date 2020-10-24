import { combineReducers } from 'redux'

import { LoginReducer } from './login/reducer'
import { RegisterReducer } from './register/reducer'
import { TokenReducer } from './token/reducer'
import { TaskReducer } from './task/reducer'

export const modulesReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  token: TokenReducer,
  task: TaskReducer
})
