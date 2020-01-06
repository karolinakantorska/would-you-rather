import { SET_LOGED_USER } from '../actions/logedUser'

export default function setLogedUser (state= {name: '', id :'' }, action) {
  switch (action.type) {
    case SET_LOGED_USER :
      return {
        name: action.name,
        id: action.id
      }
    default :
      return state
  }
}
