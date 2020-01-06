import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'
import QuestionList from './QuestionList'

class Home extends Component {

  render () {
    const {logedUser} = this.props
     if (logedUser.id === '') {
       return (
             <Redirect to= '/login' />
       )
     }

    else  {
      const {logedUserID, logedUserName, logedUserData, questionId } = this.props
      const logedUserAnswers = Object.keys(logedUserData.answers)
      let unanswered =[];

       (() =>  {questionId.map((q) =>
          (!logedUserAnswers.includes(q)) &&
         unanswered.push(q)
       )})()


      return (
        <div className= 'container'>
          <Menu name = {logedUserName}/>
          <div>
            <div>Answered
                <QuestionList ids={unanswered} />
            </div>
            <div>UnAnswered
              <ul>
                {logedUserAnswers.map((qId) => (
                  <li key={qId}>{qId}</li>
                ))
                }
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}
function mapStateToProps ({logedUser, users, questions}) {
  const logedUserID = logedUser.id
  const logedUserName = logedUser.name
  const logedUserData = users[logedUserID]
  return {
    logedUser,
    logedUserID,
    logedUserName,
    logedUserData,
    questionId: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),

  }
}
export default connect(mapStateToProps)(Home)
