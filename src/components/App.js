import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialDataUsers } from '../actions/shared'
import { handleInitialDataQuestions } from '../actions/shared'
import './App.css';
import Login from './Login'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'


class App extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialDataUsers())
    this.props.dispatch(handleInitialDataQuestions())

  }
  render() {
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
// TODO delete mapStateToProps
function mapStateToProps(state){
  return {
    state
  }
}
export default connect(mapStateToProps)(App);
