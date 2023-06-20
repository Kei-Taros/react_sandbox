import * as Act from './Action';

const initialState = {
  count_A: 0,
  count_B: 0,
  add_count: 0
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case Act.COUNTER_A:
      return {
        ...state,
        ...action.payload
      }
    case Act.COUNTER_B:
      return {
        ...state,
        ...action.payload
      }
    case Act.COUNTER_ADD:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default counter