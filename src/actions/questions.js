export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_IN_Q = 'SAVE_ANSWER_IN_Q'
export const ADD_QUESTION_IN_Q  = 'ADD_QUESTION_IN_Q '

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function saveAnswerInQ (authedUser, qid, option) {
  return {
    type: SAVE_ANSWER_IN_Q,
    authedUser,
    qid,
    option
  }
}

export function addQuestionInQ (question) {
  return {
    type: ADD_QUESTION_IN_Q,
    question
  }
}
