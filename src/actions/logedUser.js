export const SET_LOGED_USER = 'SET_LOGED_USER'

export function setLogedUser (id, name) {
  return {
    type: SET_LOGED_USER,
    id,
    name
  }
}
