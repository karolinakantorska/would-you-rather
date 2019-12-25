import React, { Component } from 'react'

class QuestionCard extends Component {

  render() {
    return(
      <div className='question-card'>
        <h1 className='special-text'>Would you rather...</h1>
          <form className='form-vote'>
             <input type='radio' name='OptionA' value='OptionA'  /> stay in the rain all night<br/>
             <input type='radio' name='OptionB' value='OptionB' /> ask your worst enemie for help<br/>
             <input type='submit' value='Vote'/>
          </form>
        <hr />
        <div className='questionAuthor'>
          <p>Question posted by Amanda</p>
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

export default QuestionCard
