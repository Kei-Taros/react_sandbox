import { connectRouter, routerMiddleware } from 'connected-react-router'
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux'
import thunk from 'redux-thunk'//非同期処理のために追加
import counterReducer from '../calcsys/reducers'
import usersReducer from '../users/reducers'

const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      count: counterReducer,
      users: usersReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}

export default createStore