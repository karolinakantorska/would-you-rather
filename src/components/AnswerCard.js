import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnswerCard extends Component {
  render () {
    const {id, author, optionOne, optionTwo } = this.props
    return (
      <div className='question-card'>
        <div>
          // TODO clearly mark choosen option
          <h2 className='special-text'>You would rather...</h2>
          <p>{optionOne}</p>
          <p className='special-text'> than </p>
          <p>{optionTwo}</p>
        </div>
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
export default connect(mapStateToProps)(AnswerCard)
