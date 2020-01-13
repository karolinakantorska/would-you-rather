import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'
import { handleSaveAnswer } from '../actions/shared'


class QuestionCard extends Component {
  state={
    option: '',
    answered: this.props.location.state.answered
  }

  addOptionToState = (e) => {

    const { dispatch } = this.props
    this.setState({ option: e.target.value})
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()
    const { id } = this.props.location.state
    const { dispatch, logedUserId } = this.props
    const { option } = this.state
    this.setState({ answered: true})
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

       const { questions, addOptionToState,logedUserAnswers, avatars}= this.props
       const author= questions[id].author
       const userAvatar = avatars.filter(
         (a) => (a[0]===author)
       )
       console.log(userAvatar[0][1])
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
           <Menu name = {logedUserName}/>

            <div className='container card'>
            {(answered) ?
              <React.Fragment>
                <h2 className='special-text'>You would rather...</h2>
                  {(answer===optionOne) ?
                    <p className='special-text option'>{optionOne}</p>
                  : <p className='special-text option'>{optionTwo}</p>}

                  <p>{nrAnsOne}{(nrAnsOne === 1) ? ' user' : ' users'} / {percent(nrAnsOne, nrAns)}% of users choose: {optionOne}</p>
                  <p>{nrAnsTwo} {(nrAnsTwo === 1) ? ' user' : ' users'} / {percent(nrAnsTwo, nrAns)}% of users choose: {optionTwo}</p>
                  <hr />
              </React.Fragment>

              :
              <React.Fragment>
                <h2 className='special-text'>Would you rather...</h2>
                  <div className='form-vote'>
                     <input type='radio' name='option' value='optionOne'onChange= {this.addOptionToState} />
                     <label>{optionOne}</label><br/>
                     <input type='radio' name='option' value='optionTwo' onChange= {this.addOptionToState} />{optionTwo}
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
}

function mapStateToProps({questions, logedUser, users}) {
  const logedUserId = logedUser.id
  const logedUserName = logedUser.name
  const logedUserAnswers = users[logedUser.id].answers
  const usersId = Object.keys(users)
  const avatars = []
  usersId.map((user) =>
    avatars.push([user,users[user].avatarURL ])
  )



  return {
    logedUserId,
    logedUserName,
    questions,
    logedUserAnswers,
    avatars
  }
}

export default connect(mapStateToProps) (QuestionCard)
