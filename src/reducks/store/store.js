import { connectRouter, routerMiddleware } from 'connected-react-router'
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux'
import thunk from 'redux-thunk'//�񓯊������̂��߂ɒǉ�
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