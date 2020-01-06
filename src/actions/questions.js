export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_IN_Q = 'SAVE_ANSWER_IN_Q'
// export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function saveAnswerInQ (logedUserId, qid, option) {
  return {
    type: SAVE_ANSWER_IN_Q,
    logedUserId,
    qid,
    option
  }
}
