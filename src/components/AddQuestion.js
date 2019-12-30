import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'

class AddQuestion extends Component {
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
          <p>Add Question Form </p>
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

export default connect(mapStateToProps)(AddQuestion)
