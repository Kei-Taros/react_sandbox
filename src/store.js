import { connectRouter, routerMiddleware } from 'connected-react-router'
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux'
import counterReducer from './reducers'
import thunk from 'redux-thunk'//非同期処理のために追加


const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      count: counterReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}

export default createStore