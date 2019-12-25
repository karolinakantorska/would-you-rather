import React, { Component } from 'react'

class QuestionList extends Component {

  render() {
    return(
      <div className='question-list'>
        <h1 className='special-text'>Questions List</h1>

        <div >
          <ul>
            <li>
              <p className='question-list-bold' >24.01.2018 Would you rather...</p>
              <p>... eat fish wit a bones or admit that you are lying ? </p>
              <p>... admit that you are lying ? </p>
            </li>
            <li>
              <p className='question-list-bold'>27.02.2018 Would you rather...</p>
              <p>... stay in the rain all night ? </p>
              <p>... ask your worst enemie for help ? </p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default QuestionList
