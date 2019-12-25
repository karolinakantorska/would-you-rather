import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'




export function handleUsersInitialData() {
  return (dispatch) =>  {
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        
      })
  }
}
