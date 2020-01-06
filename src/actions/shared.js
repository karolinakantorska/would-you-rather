// TODO write it more profesional
import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'
import { _getQuestions } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { setLogedUser} from './logedUser'
import { _saveQuestionAnswer } from '../utils/_DATA'



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
