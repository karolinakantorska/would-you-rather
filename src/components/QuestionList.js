import React from 'react'
import { Link } from 'react-router-dom'
import LinkToQuestion from './LinkToQuestion'

function QuestionList (props) {


    const { questionList, text, answered } = props
      return (
        <div className='container'>
            <div className='question-list'>
              <h2 className='special-text'>{text}</h2>
                <ul>
                {questionList.map((id) => (
                  console.log(id[0]),
                    <li className='question-link' key={id[0]} >
                      <Link to={{
                          pathname: `questions/: ${id[0]}`,
                          state: { questionList: questionList[id[0]], answered: answered },
                        }}>
                        <p className='question-link'>
                              link
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

export default QuestionList
// &#8226; Would you rather <b>{qId[1].optionOne.text}</b> <i> than </i>than <b>{qId[1].optionTwo.text}</b>?
