import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as douban from './douban/reducer'

import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({...douban}),
  applyMiddleware(thunk)
)

export default store
