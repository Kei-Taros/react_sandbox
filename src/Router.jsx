import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Counter, Home, SignUp, SignIn, SandBox } from './templates'

const Router = () => {
  console.log("Router")
  return (
    //path='(/)?'����ԏ�ɂ���Ɖ�ʑJ�ڂ��ł��Ȃ��Ȃ�
    <Switch>

      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/counter' component={Counter} />
      <Route exact path='/sandbox' component={SandBox} />
      <Route path='(/)?' component={Home} />

    </Switch>
  )
}

export default Router