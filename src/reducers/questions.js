import { RECEIVE_QUESTIONS, SAVE_ANSWER_IN_Q, ADD_QUESTION_IN_Q } from '../actions/questions'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SAVE_ANSWER_IN_Q :
    const option = action.option
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [option]: {
            ...state[action.qid][option],
            votes: state[action.qid][option].votes.concat([action.authedUser])
          }
        }
      }
    case ADD_QUESTION_IN_Q :
      return {
        ...state,
        [action.question.id]: action.question
      }

    default :
      return state
  }
}
