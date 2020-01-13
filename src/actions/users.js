export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION_IN_U = 'ADD_QUESTION_IN_U'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
export function saveAnswerInUsers (authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}
export function addQuestionInU (authedUser, id) {

  return {
    type: ADD_QUESTION_IN_U,
    authedUser,
    id
  }
}
