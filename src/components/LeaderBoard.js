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
     if (logedUserID === '') {
       return (
             <Redirect to= '/login' />
       )
     }
    else {
      return (
        <div  className= 'container'>
          <Menu name = {logedUserName} />

          <p>Leader Board</p>
          <div>
            {leaderArray.map((leader) =>
               <User id={leader[1].userID} nrQuestions={leader[1].nrQuestions} nrAnswers={leader[1].nrAnswers}/>
             )}
          </div>

      </div>
      )
    }
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
    leaderArray.push([nrQuestions+nrAnswers,{userID :user, nrQuestions: nrQuestions, nrAnswers:nrAnswers }])
  })

  return {
    logedUserID,
    logedUserName,
    leaderArray: leaderArray.sort().reverse()
  }
}

export default connect(mapStateToProps)(LeaderBoard)
