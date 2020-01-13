import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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

    const { logedUserID } = this.props


    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        logedUserID === ''
          ? <Redirect to='/login' />
          : <Component {...props} />
      )} />
    )
      return (
         <Router >
           <Switch className="App">
             <PrivateRoute path='/' exact component={Home} />
             <Route path='/login' component={Login} />
             <PrivateRoute path='/leaderboard' component={LeaderBoard} />
             <PrivateRoute path='/add' component={AddQuestion} />
             <PrivateRoute path= '/questions/:id' component={QuestionCard} />
             <Route component={NoMatchPage} />
           </Switch>
         </Router>

      )
  }
}

function mapStateToProps({logedUser}){
  const logedUserID = logedUser.id
  return {
    logedUserID

  }
}
export default connect(mapStateToProps)(App);
