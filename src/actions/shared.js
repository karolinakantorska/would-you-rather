// TODO write it more profesional
import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'

import { _getQuestions } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { saveAnswerInQ } from './questions'
import { setLogedUser} from './logedUser'
import { _saveQuestionAnswer } from '../utils/_DATA'
import { saveAnswerInUsers } from './users'
import { addQuestionInQ }from './questions'
import { _saveQuestion } from '../utils/_DATA'



export function handleInitialDataUsers() {
  return (dispatch) =>  {
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
      })
  }
}
export function handleInitialDataQuestions() {
  return (dispatch) =>  {
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
      })
  }
}

export function handleSaveAnswer (authedUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer})

      .then((authedUser, qid, answer) => dispatch(saveAnswerInUsers(authedUser, qid, answer)))
      .then((authedUser, qid, answer) => dispatch(saveAnswerInQ(authedUser, qid, answer)))
  }
}


export function handleAddQuestion (optionOneText, optionTwoText, author) {
  const question= { optionOneText, optionTwoText, author }
  return (dispatch) => {
    return _saveQuestion (question)({
      question
    })
    .then((optionOneText, optionTwoText, author) => dispatch(addQuestionInQ (optionOneText, optionTwoText, author)))
  }
}
