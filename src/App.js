import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

// pages
import Cards from "./pages/cards/Cards"
import AddOrEditCard from "./pages/addOrEditCard/AddOrEditCard"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/cards'/>} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/cards/add" component={AddOrEditCard} />
        <Route path="/cards/:id/edit" component={AddOrEditCard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
