import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'//�񓯊������̂��߂ɒǉ�
import counter from './Reducer'


const store = createStore(counter, applyMiddleware(thunk))

export default store