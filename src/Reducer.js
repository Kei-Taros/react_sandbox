const initialState = {
  count_A: 0,
  count_B: 0,
  add_count: 0
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_A':
      return {
        ...state,
        count_A: state.count_A + 1
      }
    case 'DECREMENT_A':
      return {
        ...state,
        count_A: state.count_A - 1
      }
    case 'INCREMENT_B':
      return {
        ...state,
        count_B: state.count_B + 1
      }
    case 'DECREMENT_B':
      return {
        ...state,
        count_B: state.count_B - 1
      }
    case 'ADD_COUNT':
      return {
        ...state,
        add_count: state.count_A + state.count_B
      }
    default:
      return state
  }
}

export default counter