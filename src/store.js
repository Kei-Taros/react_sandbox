import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'//非同期処理のために追加
import counter from './Reducer'


const store = createStore(counter, applyMiddleware(thunk))

export default store