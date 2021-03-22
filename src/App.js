import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// pages
import Cards from "./pages/cards/Cards"

const App = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/cards'/>} />
      <Route path='/cards' component={Cards}/>
    </Switch>
  )
}

export default App
