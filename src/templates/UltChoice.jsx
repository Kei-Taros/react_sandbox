import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

export const UltChoice = () => {
  const [itemA, setItemA] = useState(50),
        [itemB, setItemB] = useState(50),
        [nameA, setNameA] = useState(''),
        [nameB, setNameB] = useState(''),
        [resultText, setResultText] = useState('')

  const chengeA = (event) => {
    let numberA = event.target.value
    if (numberA > 100) {
      numberA = 99
    }
    if (numberA < 1) {
      numberA = 1
    }
    setItemA(numberA)
    setItemB(100 - numberA)
  }
  const chengeB = (event) => {
    let numberB = event.target.value
    if (numberB > 100) {
      numberB = 99
    }
    if (numberB < 1) {
      numberB = 1
    }
    setItemB(numberB)
    setItemA(100 - numberB)
  }

  const onSubmit = () => {
    if (nameA === '' || nameB === '') {
      alert('Required!!!')
      return false
    }
    const rand = Math.floor(Math.random() * 100) + 1;
    console.log(rand)
    if (itemA < rand) {
      setResultText(nameA + ' Crash!!!')
    }
    else {
      setResultText(nameB + ' Crash!!!')
    }
  }

  return (
    <>
      <h1>Ultimate Choice</h1>
      <table border="1">
        <tr>
          <td>
            <input
              value={nameA}
              placeholder="Item A"
              onChange={(event) => setNameA(event.target.value)}
            />
          </td>
          <td>
            <input
              value={nameB}
              placeholder="Item B"
              onChange={(event) => setNameB(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            LOVE:
            <input
              type="number"
              value={itemA}
              onChange={chengeA}
              max={99}
              min={1}
            />
          </td>
          <td>
            LOVE:
            <input
              type="number"
              value={itemB}
              onChange={chengeB}
              max={99}
              min={1}
            />
          </td>
        </tr>
      </table>
      <br />
      <Button
        size="large"
        variant="outlined"
        onClick={onSubmit}
      >
        JUDGE
      </Button>
      <br />
      <div style={{ color: 'red', fontSize: 80 }}>
        {resultText}
      </div>
      <br />
      <div>
        Home to <Link to={`/`}>this.</Link>
      </div>
    </>
  )
}

export default UltChoice