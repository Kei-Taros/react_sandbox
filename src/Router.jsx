import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Counter, Home } from './templates'

//<Route path='(/)?' component={Home} />
//<Route exact path='/counter' component={Counter} />

const Router = () => {
  console.log("Router")
  return (
    <Switch>
      <Route path='/counter' component={Counter} />
      <Route path='(/)?' component={Home} />
    </Switch>
  )
}

export default Router