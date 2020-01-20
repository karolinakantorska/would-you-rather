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
    dispatch(setLogedUser(this.state.selectedUser, this.state.selectedUserName ))
    this.setState({ toHome: true })
  }

  setUserToState = (e) => {
    const { usersInfo } = this.props
    this.setState({selectedUser:  e.target.value, selectedUserName: usersInfo[e.target.value].name })
  }
  render () {
    const { userIdArray, usersInfo} = this.props
    const {  toHome } = this.state

    if (toHome) {
      return (
      <Redirect to={this.props.location.state ? this.props.location.state.referrer: '/'}/>
      )
    }
    else {
      return (
        <div className='container-login'>
          <h2>Choose your user account and login.</h2>

          <form className='form'>
            <select onChange={this.setUserToState} >
              {userIdArray.map((id) =>
                <option key={id} value={id} >{usersInfo[id].name}</option>
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
