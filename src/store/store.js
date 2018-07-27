import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as login from './login/reducer'
import * as douban from './douban/reducer'

import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({...login, ...douban}),
  applyMiddleware(thunk)
)

export default store
