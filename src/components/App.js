import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUsersInitialData } from '../actions/shared'
import './App.css';
import UserBar from './UserBar'
import Menu from './Menu'
import QuestionCard from './QuestionCard'
import QuestionList from './QuestionList'
import Login from './Login'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleUsersInitialData())
  }
  render() {
    return (
      <div className="App">
        <UserBar/>

        <Login/>
      </div>
    )
  }

}

export default connect()(App);
