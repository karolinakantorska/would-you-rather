import { RECEIVE_QUESTIONS } from '../actions/questions'
import { SAVE_ANSWER_IN_Q } from '../actions/questions'

export default function users (state={}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ... state,
        ... action.questions
      }
    case SAVE_ANSWER_IN_Q :
    const option= action.option
      return {
        // TODO ask about all those [] and why I must: const option= action.option
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [option]: {
            ...state[action.qid][option],
            votes: state[action.qid][option].votes.concat([action.authedUser])
            }
          }
        }

    default :
      return state
  }
}
