import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser} from '../actions/authedUser'


class Login extends Component {

  state={
    selectedUser: this.props.userId[0]
    // TODO not to hardcode johndoe
  }

  handleSetAuthedUser = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.selectedUser))
  }

  setUserToState = (e) => {
    this.setState({selectedUser:e.target.value})
  }

  render () {
    const { userId,   } = this.props
    console.log(this.props)
    return (
      <div className='question-card'>
        <h2>Choose your user account and login.</h2>
        <form>
          <select name='users' onChange={this.setUserToState} >
            {userId.map((user) =>
              <option key={user} value={user}>{user}</option>
            )}
          </select>
          <br />
          <input type='submit' value='login' onClick= {this.handleSetAuthedUser}/>
        </form>
      </div>
    )
  }
}

function mapStateToProps (users ) {
  const u = Object.entries(users)

  return {
    userId: Object.keys(u[0][1]).sort()
  }
}

export default connect(mapStateToProps)(Login)
