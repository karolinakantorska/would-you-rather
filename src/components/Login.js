import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLogedUser} from '../actions/logedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state={
    selectedUserName: 'John Doe',
    selectedUser: 'johndoe',

    // TODO not to hardcode johndoe
    toHome: false
  }

  handleSetLogedUser = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setLogedUser(this.state.selectedUser,this.state.selectedUserName ))
    this.setState({ toHome: true })
  }

  setUserToState = (e) => {
    // TODO  CORECT THIS
    this.setState({selectedUser:  e.target.value })
    this.setState({selectedUserName: e.target.innerText })
  }

  render () {
    const { userIdArray, usersInfo} = this.props
    const {  toHome } = this.state

    console.log(this.props)

    if (toHome) {
      return (
      <Redirect to= '/' />
      )
    }
    else {
      return (
        <div className='question-card'>
          <h2>Choose your user account and login.</h2>
          <form>
            <select  >
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
    userIdArray:userIdArray,
    usersInfo:usersInfo,
  }
}

export default connect(mapStateToProps)(Login)
