export const SET_LOGED_USER = 'SET_LOGED_USER'
// TODO add more info to authed user

export function setLogedUser (id, name) {
  return {
    type: SET_LOGED_USER,
    id,
    name
  }
}
