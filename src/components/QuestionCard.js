import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'
// TODO delete it later:
import { saveAnswerInUsers } from '../actions/users'
import { handleSaveAnswer } from '../actions/shared'
// TODO delete it later:
import { saveAnswerInQ } from '../actions/questions'

class QuestionCard extends Component {
  state={
    option: '',
    answered: this.props.location.state.answered
  }

  addOptionToState = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    this.setState({ option: e.target.value})
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()
    const { id } = this.props.location.state
    const { dispatch, logedUserId } = this.props
    const { option } = this.state
    this.setState({ answered: true})
    dispatch(saveAnswerInUsers(logedUserId, id, option ))
    dispatch(saveAnswerInQ(logedUserId, id, option ))
    dispatch(handleSaveAnswer(logedUserId, id, option ))
  }

  render() {
    const { id } = this.props.location.state
    const { answered } = this.state
    const { logedUserID, logedUserName}= this.props

     if (logedUserID === '') {
       return (
             <Redirect to= '/login' />
       )
     }

     else {

       const { questions, addOptionToState,logedUserAnswers}= this.props
       const author= questions[id].author
       const optionOne= questions[id].optionOne.text
       const optionTwo= questions[id].optionTwo.text
       const answer= logedUserAnswers[id]
       const nrAnsOne= questions[id].optionOne.votes.length
       const nrAnsTwo= questions[id].optionTwo.votes.length
       const nrAns = nrAnsOne + nrAnsTwo

       const percent= (partialValue, totalValue) => (
         (100 * partialValue) / totalValue
       )


       return(
         <div className= 'container'>
           <Menu name = {logedUserName}/>

// Question Card
            <div className='question-card'>
// Answered
            {(answered) ?

              <React.Fragment>
                <h2 className='special-text'>You would rather...</h2>
                  {(answer===optionOne) ?
                  <p className='special-text'>{optionOne}</p>
                  : <p className='special-text'>{optionTwo}</p>}

                  <hr />
                  // TODO correct grammar
                  <p>{nrAnsOne} users / {percent(nrAnsOne, nrAns)}% of users choose: {optionOne}</p>
                  <p>{nrAnsTwo} users / {percent(nrAnsTwo, nrAns)}% of users choose: {optionTwo}</p>

              </React.Fragment>
// Unanswered
              :
              <React.Fragment>
                <h2 className='special-text'>Would you rather...</h2>
                  <div className='form-vote'>
                    <div>
                     <input type='radio' name='option' value='optionOne'onChange= {this.addOptionToState} />
                     <label>{optionOne}</label><br/>
                     <input type='radio' name='option' value='optionTwo' onChange= {this.addOptionToState} />{optionTwo}
                     <label>{optionTwo}</label><br/>
                    </div>
                     <input type='submit' value='Vote' onClick= {this.handleSubmitAnswer} />
                  </div>
              </React.Fragment>
            }

// Question Author

             <div className='questionAuthor'>
               <hr />
               <p>{author}</p>
               <div
                className='user-avatar'
                style= {{
                       backgroundColor: 'LightSteelBlue',
                     }}
               ></div>
             </div>
           </div>

       </div>
       )
     }

  }
}

function mapStateToProps({questions, logedUser, users}) {
  const logedUserId = logedUser.id
  const logedUserName = logedUser.name
  const logedUserAnswers = users[logedUserId].answers
  return {
    logedUserId,
    logedUserName,
    questions,
    logedUserAnswers
  }
}

export default connect(mapStateToProps) (QuestionCard)
