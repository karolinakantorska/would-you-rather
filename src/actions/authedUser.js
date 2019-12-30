export const SET_AUTHED_USER = 'SET_AUTHED_USER'
// TODO add more info to authed user

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}
