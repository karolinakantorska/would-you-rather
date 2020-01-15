import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLogedUser} from '../actions/logedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state= {
    selectedUserName: 'John Doe',
    selectedUser: 'johndoe',

    toHome: false
  }
  handleSetLogedUser = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setLogedUser(this.state.selectedUser,this.state.selectedUserName ))
    this.setState({ toHome: true })
  }

  setUserToState = (e) => {
    this.setState({selectedUser:  e.target.value, selectedUserName: e.target.innerText })
  }
  render () {
    const { userIdArray, usersInfo} = this.props
    const {  toHome } = this.state
    console.log(userIdArray)

    if (toHome) {
      return (
      <Redirect to= '/' />
      )
    }
    else {
      return (
        <div className='container-login'>
          <h2>Choose your user account and login.</h2>

          <form className='form'>
            <select >
              {userIdArray.map((id) =>
                <option key={id} value={id} onClick={this.setUserToState}>{usersInfo[id].name}</option>
              )}
            </select>
            <br />
            <input type='submit' value='login' onClick= {this.handleSetLogedUser} />

          </form>
        </div>
      )
    }
  }
}
function mapStateToProps ({users}) {
  const userIdArray = Object.keys(users).sort()
  const usersInfo = users
  return {
    userIdArray,
    usersInfo,

  }
}
export default connect(mapStateToProps)(Login)
