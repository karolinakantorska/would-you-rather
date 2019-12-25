import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserBar extends Component {
  render () {
    const { authedUser } = this.props
    return (
      <div className='user-bar'>
        <div id='LogedUser'>{authedUser}</div>
      </div>
    )
  }
}


function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(UserBar)
