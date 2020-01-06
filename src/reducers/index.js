import { combineReducers } from 'redux'
import users from './users'
import logedUser from './logedUser'
import questions from './questions'

export default combineReducers({
  logedUser,
  users,
  questions
})
