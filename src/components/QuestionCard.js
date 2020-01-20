import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import { handleSaveAnswer } from '../actions/shared'
import {Redirect } from 'react-router-dom'


class QuestionCard extends Component {
  state= {
    option: '',
  }

  addOptionToState = (e) => {
        this.setState({ option: e.target.value })
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()
    const { dispatch, logedUserId, qId } = this.props
    const { option } = this.state
    dispatch(handleSaveAnswer(logedUserId, qId, option ))
  }

  render() {


const {question}= this.props
       if (question === undefined) {
         return (
           <Redirect to= '/Error404' />
         )
       }
       else {
         const { question, logedUserAnswers, avatars, answered, qId}= this.props
          const {author, optionOne, optionTwo} = question

          const userAvatar = avatars.filter(
             (a) => (a[0]===author)
           )
           const answer= logedUserAnswers[qId]

           const nrAnsOne = optionOne.votes.length
           const nrAnsTwo = optionTwo.votes.length
           const nrAns = nrAnsOne + nrAnsTwo

           const percent= (partialValue, totalValue) => (
              (100 * partialValue) / totalValue
            )
         return (
         <div >
           <Menu />
            <div className='container card'>
              {(answered) ?
              <React.Fragment>
                <h2 className='special-text'>You would rather...</h2>
                  {(answer===optionOne.text) ?
                    <p className='special-text option'>{optionOne.text}</p>
                  : <p className='special-text option'>{optionTwo.text}</p>}
                  <p>{nrAnsOne}{(nrAnsOne === 1) ? ' user' : ' users'} / {percent(nrAnsOne, nrAns)}% of users choose: {optionOne.text}</p>
                  <p>{nrAnsTwo} {(nrAnsTwo === 1) ? ' user' : ' users'} / {percent(nrAnsTwo, nrAns)}% of users choose: {optionTwo.text}</p>
                  <hr />
              </React.Fragment>
              :
              <React.Fragment>
                <h2 className='special-text'>Would you rather...</h2>
                <p></p>
                  <div className='form-vote'>
                     <input type='radio' name= 'option' value='optionOne'onChange= {this.addOptionToState} />
                     <label>{optionOne.text}</label><br/>
                     <input type='radio' name= 'option' value='optionTwo' onChange= {this.addOptionToState} />
                     <label>{optionTwo.text}</label><br/>
                     <input type='submit' value='Vote' onClick= {this.handleSubmitAnswer} />
                  </div>
                  <hr />
              </React.Fragment>
            }
             <div className='questionAuthor'>
               <p >{author}</p>
               <div className='user-avatar'
                style= {{
                       backgroundColor: 'LightSteelBlue' ,
                       backgroundImage: `url(${userAvatar[0][1]})`,
                       backgroundSize: '80px 100px',
                     }}
               ></div>
             </div>
           </div>
       </div>
     )
       }


}
}

function mapStateToProps(state, props) {
  const {questions, logedUser, users} = state
  const qId = props.match.params.id.trim()

  const logedUserId = logedUser.id

  const question = questions[qId]
  console.log(question)
  const logedUserAnswers = users[logedUserId].answers


  const usersId = Object.keys(users)

  const avatars = []
  usersId.map((user) =>
    avatars.push([user,users[user].avatarURL ])
  )
  const answered = Object.keys(logedUserAnswers).includes(qId)

  return {
    logedUserId,
    questions,
    logedUserAnswers,
    avatars,
    question,
    answered,
    qId
  }
}

export default connect(mapStateToProps) (QuestionCard)
