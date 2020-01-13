import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialDataUsers, handleInitialDataQuestions } from '../actions/shared'
import './App.css';
import Login from './Login'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import QuestionCard from './QuestionCard'
import NoMatchPage from './NoMatchPage'


class App extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialDataUsers())
    this.props.dispatch(handleInitialDataQuestions())

  }
  render() {
      return (

        <Router >
          <Switch className="App">
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/add' component={AddQuestion} />
            <Route path= '/questions/:id' component={QuestionCard} />
            <Route component={NoMatchPage} />
          </Switch>
        </Router>
      )
  }
}
// TODO delete mapStateToProps
function mapStateToProps(state){
  return {
    state
  }
}
export default connect(mapStateToProps)(App);
