import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser} from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state={
    selectedUser: 'johndoe',
    // TODO not to hardcode johndoe
    toHome: false
  }

  handleSetAuthedUser = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.selectedUser))
    this.setState({ toHome: true })
  }

  setUserToState = (e) => {
    this.setState({selectedUser:e.target.value})
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
            <select name='users' onChange={this.setUserToState} >
              {userIdArray.map((id) =>
                <option key={id} value={id}>{usersInfo[id].name}</option>
              )}
            </select>
            <br />
            <input type='submit' value='login' onClick= {this.handleSetAuthedUser} />
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
    users
  }
}

export default connect(mapStateToProps)(Login)
