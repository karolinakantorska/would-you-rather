import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'

class LeaderBoard extends Component {
  state= {
    authedUser: ''
  }

  render () {
    const {authedUser} = this.props

    if (authedUser=== null) {
      return (
            <Redirect to= '/login' />
      )
    }
    else {
      return (
        <div  className= 'container'>
          <Menu />
          <p>Leader Board</p>
        </div>
      )
    }
  }
}
function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(LeaderBoard)
