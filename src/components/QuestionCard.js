import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionCard extends Component {

  render() {
    const { author, optionOne, optionTwo}= this.props

    return(
      <div className='question-card'>
        <h2 className='special-text'>Would you rather...</h2>
          <form className='form-vote'>
             <input type='radio' name='OptionA' value='OptionA'  />{optionOne}<br/>
             <input type='radio' name='OptionB' value='OptionB' />{optionTwo}<br/>
             <input type='submit' value='Vote'/>
          </form>
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

function mapStateToProps({questions},{id}) {

  return {
    author: questions[id].author,
    optionOne: questions[id].optionOne.text,
    optionTwo: questions[id].optionTwo.text,

  }
}

export default connect(mapStateToProps) (QuestionCard)
