import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleUsersInitialData } from '../actions/shared'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import './App.css';
import Login from './Login'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'


class App extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} =this.props
      return (
        // TODO block all others adresses by 404 error
        <Router >
          <div className="App">
           <Route path='/' exact component={Home} />
           <Route path='/login' component={Login} />
           <Route path='/leader' component={LeaderBoard} />
           <Route path='/addQuestion' component={AddQuestion} />
          </div>
        </Router>
      )
  }
}

export default connect()(App);
