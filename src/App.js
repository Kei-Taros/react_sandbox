import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const count_A = useSelector((state) => state.count_A)//ステートの状態を取得する
  const count_B = useSelector((state) => state.count_B)
  const add_count = useSelector((state) => state.add_count)
  const dispatch = useDispatch()

  const increment_A = () => dispatch({ type: 'INCREMENT_A' })
  const decrement_A  = () => dispatch({ type: 'DECREMENT_A' })
  const increment_B = () => dispatch({ type: 'INCREMENT_B' })
  const decrement_B = () => dispatch({ type: 'DECREMENT_B' })
  const addCount = () => dispatch({ type: 'ADD_COUNT' })

  return (
    <div>
      <h1>
        Addition Count: {add_count}
        <button onClick={addCount}>ADD</button>
      </h1>
      <div>
        <button onClick={increment_A}>+1</button>
        <button onClick={decrement_A}>-1</button>
        Count: {count_A}
      </div>
      <div>
        <button onClick={increment_B}>+1</button>
        <button onClick={decrement_B}>-1</button>
        Count: {count_B}
      </div>
    </div>
  )
}

export default App