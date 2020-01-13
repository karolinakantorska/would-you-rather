import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion  } from '../utils/_DATA'
import { receiveUsers, saveAnswerInUsers, addQuestionInU } from './users'
import { receiveQuestions, saveAnswerInQ, addQuestionInQ } from './questions'

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
      .then((users, guestions) =>
      dispatch(saveAnswerInUsers(authedUser, qid, answer)),
      dispatch(saveAnswerInQ(authedUser, qid, answer)))
  }
}


export function handleAddQuestion (optionOneText, optionTwoText, author) {
  console.log(optionOneText)
  console.log(optionTwoText)
  console.log(author)
  return (dispatch) => {
    return _saveQuestion ({
      optionOneText,
      optionTwoText,
      author
    }).then((question, users) => {
      dispatch(addQuestionInQ(question));
      dispatch(addQuestionInU(question.author, question.id));
    });
  }
}
