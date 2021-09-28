import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ListingRoute from './components/ListingRoute'
import MfDetails from './components/MfDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mf" component={ListingRoute} />
          <Route exact path="/mf/:id" component={MfDetails} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
