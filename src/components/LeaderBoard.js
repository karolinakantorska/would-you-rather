import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import User from './User'

class LeaderBoard extends Component {
  state= {
    authedUser: ''
  }

  render () {

    const {logedUserName, leaderArray} = this.props

      return (
        <div  >
          <Menu  />
          <div className= 'container leader'>
            <h2 className= 'special-text'>Leader Board</h2>
            <div>
              {leaderArray.map((leader) =>
                 <User key={leader[1].userID}  id={leader[1].userID} nrQuestions={leader[1].nrQuestions} nrAnswers={leader[1].nrAnswers} userName = {leader[1].userName} avatar= {leader[1].avatar}/>
               )}
            </div>
          </div>
      </div>
      )

  }
}

function mapStateToProps({logedUser, users}) {
  const logedUserName = logedUser.name
  const userIdArray = Object.keys(users)

  // const leaderList = userIdArray.map((user) => {
  //   const nrAnswers = Object.keys(users[user].answers).length
  //   const nrQuestions = users[user].questions.length
  //   const total = nrQuestions+nrAnswers
  //   return {user,{ user, total, nrQuestions, nrAnswers, userName, avatar }}
  // }
  const leaderArray =[]

  userIdArray.map((user) => {
    const nrAnswers = Object.keys(users[user].answers).length
    const nrQuestions = users[user].questions.length
    const userName  = users[user].name
    const avatar = users[user].avatarURL
    leaderArray.push([nrQuestions+nrAnswers,{userID :user, nrQuestions: nrQuestions, nrAnswers:nrAnswers, userName: userName, avatar }])
  })

  return {
    logedUserName,
    leaderArray: leaderArray.sort().reverse()
  }
}

export default connect(mapStateToProps)(LeaderBoard)
