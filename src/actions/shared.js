import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'
import { _getQuestions } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { setAuthedUser} from './authedUser'

const AUTHED_ID = null


export function handleInitialData() {
  return (dispatch) =>  {
    return _getUsers()
      .then((users) => {
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(receiveUsers(users))
      })
      .then(() => _getQuestions()
      .then((questions) =>{
        dispatch(receiveQuestions(questions))

      }))
  }
}
