import React, { Component } from 'react'
import QuestionCard from './QuestionCard'

class QuestionList extends Component {
  render () {
    const { ids } = this.props
      return (
        <div className='container'>
            <div className='question-list'>
              <h1 className='special-text'>Questions List</h1>
              <ul>
                {ids.map((qId) => (
                  <li key={qId}>
                    <QuestionCard id={qId} />
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
