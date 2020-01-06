import { _saveQuestionAnswer } from  '../utils/_DATA'
import { saveAnswerInQ } from './questions'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
export function saveAnswer (logedUserId, qid, answer) {
  return {
    type: SAVE_ANSWER,
    logedUserId,
    qid,
    answer
  }
}

export function handleSaveAnswer (logedUserId, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({
      authedUser : logedUserId,
      qid,
      answer})
      .then((logedUserId, qid, answer) => dispatch(saveAnswer(logedUserId, qid, answer)))
      .then((logedUserId, qid, answer) => dispatch(saveAnswerInQ(logedUserId, qid, answer)))
  }
}

// authedUser, qid, answer
