import React, { Component } from 'react'

class User extends Component {

  render (){
    const { id, nrAnswers, nrQuestions } = this.props
    return (
      // TODO change class name
      <div className='question-card' >
      // TODO change class name
        <div className='questionAuthor'>
          <p>User Name</p>
          <p>{id}</p>
            <div
              className='user-avatar'
              style= {{
                     backgroundColor: 'LightSteelBlue',
                   }}
            ></div>
        </div>
          // TODO correct grammar
          <p>Asked {nrQuestions} Questions</p>
          <p>Answeared {nrAnswers} Questions</p>

      </div>
    )
  }
}

export default User
