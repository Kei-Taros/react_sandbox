import { counterAction_A, counterAction_ADD, counterAction_B } from "./Action";
import * as App from "./App";

export const incdecSystem = (type) => {
  return async (dispatch, getState) => {
    const state = getState()
    let counter_A = state.count_A
    let counter_B = state.count_B

    switch (type) {
      case App.INC_A:
        dispatch(counterAction_A({
          count_A: ++counter_A
        }))
        break
      case App.DEC_A:
        dispatch(counterAction_A({
          count_A: --counter_A
        }))
        break

      case App.INC_B:
        dispatch(counterAction_B({
          count_B: ++counter_B
        }))
        break
      case App.DEC_B:
        dispatch(counterAction_B({
          count_B: --counter_B
        }))
        break

      case App.ADD:
        dispatch(counterAction_ADD({
          add_count: counter_A + counter_B
        }))
        break

      default:
        break
    }
  }
}

