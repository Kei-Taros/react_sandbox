import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'//”ñ“¯Šúˆ—‚Ì‚½‚ß‚É’Ç‰Á
import counter from './Reducer'


const store = createStore(counter, applyMiddleware(thunk))

export default store