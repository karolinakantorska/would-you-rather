import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class QuestionList extends Component {

  render () {
    const { questionList, text, answered } = this.props
      return (
        <div className='container'>
            <div className='question-list'>
              <ul>
                <h2>{text}</h2>
                {questionList.map((qId) => (
                    <li key={qId} >
                      <Link to={{
                          pathname: `questions/: ${qId[0]}`,
                          state: { id: qId[0], answered: answered },
                        }}>
                        <p>
                          Would you rather {qId[1].optionOne} than {qId[1].optionTwo}?
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
