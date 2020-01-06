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
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.option]: {
            ...state[action.qid][action.option],
            votes: {
              ...state[action.qid][action.option].votes,
              votes:[action.logedUserId]
            }
            }
          }
        }


    default :
      return state
  }
}

// return {
//   ...state,
//   [action.authedUser]:{
//     ...state[action.authedUser],
//     answers: {
//       ...state[action.authedUser].answers,
//       [action.qId] : action.option
//     }
//   }
// }


// (logedUserId, qid, option)
// {questions[qid][answer].votes.concat([logedUserId])
