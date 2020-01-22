import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialDataUsers, handleInitialDataQuestions } from '../actions/shared'
import Login from './Login'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import QuestionCard from './QuestionCard'
import NoMatchPage from './NoMatchPage'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialDataUsers())
    this.props.dispatch(handleInitialDataQuestions())
  }

  render () {
    return (
      <Router>
        <Switch className='App'>
          <PrivateRoute path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/leaderboard' component={LeaderBoard} />
          <PrivateRoute path='/add' component={AddQuestion} />
          <PrivateRoute path='/questions/:id' component={QuestionCard} />
          <Route patch='/Error 404' component={NoMatchPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    )
  }
}

export default connect()(App)
