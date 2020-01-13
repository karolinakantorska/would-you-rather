import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'
import User from './User'

class LeaderBoard extends Component {
  state= {
    authedUser: ''
  }

  render () {

    const {logedUserID, logedUserName, leaderArray} = this.props
    //  if (logedUserID === '') {
    //    return (
    //          <Redirect to= '/login' />
    //    )
    //  }
    // else {
      return (
        <div  >
          <Menu name = {logedUserName} />
          <div className= 'container leader'>
            <h2 className= 'special-text'>Leader Board</h2>
            <div>
              {leaderArray.map((leader) =>
                 <User id={leader[1].userID} nrQuestions={leader[1].nrQuestions} nrAnswers={leader[1].nrAnswers} userName = {leader[1].userName}/>
               )}
            </div>
          </div>
      </div>
      )
    // }
  }
}

function mapStateToProps({logedUser, users}) {
  const logedUserID = logedUser.id
  const logedUserName = logedUser.name
  const userIdArray = Object.keys(users)

  const leaderArray =[]

  userIdArray.map((user) => {
    const nrAnswers = Object.keys(users[user].answers).length
    const nrQuestions = users[user].questions.length
    const userName  = users[user].name
    leaderArray.push([nrQuestions+nrAnswers,{userID :user, nrQuestions: nrQuestions, nrAnswers:nrAnswers, userName: userName }])
  })

  return {
    logedUserID,
    logedUserName,
    leaderArray: leaderArray.sort().reverse()
  }
}

export default connect(mapStateToProps)(LeaderBoard)
