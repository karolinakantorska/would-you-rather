import React, { Component } from 'react'

class User extends Component {

  render (){
    const { id, nrAnswers, nrQuestions, userName } = this.props
    return (
      <div className= 'container'>
        <h4>{userName}</h4>
        <div className='questionAuthor'>
          <p>{id}</p>
            <div
              className='user-avatar'
              style= {{
                     backgroundColor: 'LightSteelBlue',
                   }}
            ></div>
        </div>
          <p>Asked {nrQuestions} {(nrQuestions === 1) ? ' question' : ' questions'} </p>
          <p>Answeared {nrAnswers} {(nrAnswers === 1) ? ' answers' : ' answers'}</p>
          <hr />
      </div>
    )
  }
}

export default User
