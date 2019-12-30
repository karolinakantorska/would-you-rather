import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'
import QuestionList from './QuestionList'

class Home extends Component {

  render () {
    const {authedUser, users, questionId, u} = this.props

    console.log('authedUser: ',authedUser)
    console.log('users: ',users)
    console.log('questionId: ',questionId)
    console.log('u: ',u)
    // PROBLEM APPEARS HERE
    console.log('u: ',u.id)
    if (authedUser === null) {
      return (
            <Redirect to= '/login' />
      )
    }

    else  {

      return (
        <div className= 'container'>
          <Menu name = {authedUser}/>
          <div>


          </div>
          <div>
            <p> Answeared </p>

          </div>
        </div>
      )
    }
  }
}
function mapStateToProps ({authedUser, questions, users}) {
  const u= users[authedUser]

  return {
    authedUser,

    u,

    users,
    questionId: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),

  }
}
export default connect(mapStateToProps)(Home)
