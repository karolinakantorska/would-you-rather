import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class QuestionList extends Component {

  render () {
    const { questionList, text, answered } = this.props
      return (
        <div className='container'>
            <div className='question-list'>
              <h2 className='special-text'>{text}</h2>
                <ul>
                {questionList.map((qId) => (
                    <li key={qId} >
                      <Link to={{
                          pathname: `questions/: ${qId[0]}`,
                          state: { id: qId[0], answered: answered },
                        }}>
                        <p className='question-link'>
                            	&#8226; Would you rather <b>{qId[1].optionOne}</b> <i> than </i>than <b>{qId[1].optionTwo}</b>?
                        </p>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
        </div>
      )
  }
}



export default QuestionList
