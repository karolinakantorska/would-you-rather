import React from 'react'

function User (props) {
  const { id, nrAnswers, nrQuestions, userName, avatar } = props
  return (
    <div className='container'>
      <h4>{userName}</h4>
      <div className='questionAuthor'>
        <p>{id}</p>
        <div
          className='user-avatar'
          style={{
            backgroundColor: 'LightSteelBlue',
            backgroundImage: `url(${avatar})`,
            backgroundSize: '80px 100px'
          }}
        />
      </div>
      <p>Asked {nrQuestions} {(nrQuestions === 1) ? ' question' : ' questions'} </p>
      <p>Answeared {nrAnswers} {(nrAnswers === 1) ? ' answers' : ' answers'}</p>
      <hr />
    </div>
  )
}

export default User
