import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from './Menu'
import { handleSaveAnswer } from '../actions/shared'


class QuestionCard extends Component {
  state= {
    option: '',
    answered: this.props.location.state.answered,
  }

  addOptionToState = (e) => {
        this.setState({ option: e.target.value })
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()
    const { dispatch, logedUserId } = this.props
    const { id } = this.props.location.state
    const { option } = this.state

    dispatch(handleSaveAnswer(logedUserId, id, option ))
    .then(() => this.props.history.push('/'))
  }

  render() {
   const { id } = this.props.location.state
   const { answered } = this.state
   const { questions,logedUserAnswers, avatars}= this.props
   const QuestionId =questions[0]
   const author= questions[id].author

   const userAvatar = avatars.filter(
     (a) => (a[0]===author)
   )

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
         <div >
           <Menu />
            <div className='container card'>
              {(answered) ?
              <React.Fragment>
                <h2 className='special-text'>You would rather...</h2>
                  {(answer===optionOne) ?
                    <p className='special-text option'>{optionOne}{id}</p>
                  : <p className='special-text option'>{optionTwo}</p>}
                  <p>{nrAnsOne}{(nrAnsOne === 1) ? ' user' : ' users'} / {percent(nrAnsOne, nrAns)}% of users choose: {optionOne}</p>
                  <p>{nrAnsTwo} {(nrAnsTwo === 1) ? ' user' : ' users'} / {percent(nrAnsTwo, nrAns)}% of users choose: {optionTwo}</p>
                  <hr />
              </React.Fragment>
              :
              <React.Fragment>
                <h2 className='special-text'>Would you rather...</h2>
                <p></p>
                  <div className='form-vote'>
                     <input type='radio' name= 'option' value='optionOne'onChange= {this.addOptionToState} />
                     <label>{optionOne}</label><br/>
                     <input type='radio' name= 'option' value='optionTwo' onChange= {this.addOptionToState} />
                     <label>{optionTwo}</label><br/>
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

function mapStateToProps({questions, logedUser, users}) {
  const logedUserId = logedUser.id
  const logedUserAnswers = users[logedUser.id].answers
  const usersId = Object.keys(users)
  const avatars = []
  usersId.map((user) =>
    avatars.push([user,users[user].avatarURL ])
  )

  return {
    logedUserId,
    questions,
    logedUserAnswers,
    avatars
  }
}

export default connect(mapStateToProps) (QuestionCard)
