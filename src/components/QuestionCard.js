import React, { Component } from 'react'
import { connect } from 'react-redux'
// TODO delete it later:
import { saveAnswer } from '../actions/users'
import { handleSaveAnswer } from '../actions/users'
// TODO delete it later:
import { saveAnswerInQ } from '../actions/questions'

class QuestionCard extends Component {
  state={
    option: '',
  }

  addOptionToState = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    this.setState({ option: e.target.value})
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()
    const { dispatch, logedUserId, id } = this.props
    const { option } = this.state
    dispatch(saveAnswerInQ(logedUserId, id, option ))
  }

  render() {
    const { author, optionOne, optionTwo, addOptionToState}= this.props

    return(
      <div className='question-card'>
        <h2 className='special-text'>Would you rather...</h2>
          <div className='form-vote'>
            <div>
             <input type='radio' name='option' value='optionOne 'onChange= {this.addOptionToState} />
             <label>{optionOne}</label><br/>
             <input type='radio' name='option' value='optionTwo' onChange= {this.addOptionToState} />{optionTwo}
             <label>{optionTwo}</label><br/>
            </div>
             <input type='submit' value='Vote' onClick={this.handleSubmitAnswer} />
          </div>
          <p></p>
        <hr />
        <div className='questionAuthor'>
          <p>{author}</p>
         <div
         className='user-avatar'
         style= {{
                backgroundColor: 'LightSteelBlue',
              }}
         ></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, logedUser},{id}) {
  const logedUserId = logedUser.id
  return {
    logedUserId,
    id,
    author: questions[id].author,
    optionOne: questions[id].optionOne.text,
    optionTwo: questions[id].optionTwo.text,
  }
}

export default connect(mapStateToProps) (QuestionCard)
