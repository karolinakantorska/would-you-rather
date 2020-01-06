import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'

class AddQuestion extends Component {
  state= {
    authedUser: ''
  }

  render () {
    const {logedUser} = this.props
     if (logedUser.logedUser === '') {
       return (
             <Redirect to= '/login' />
       )
     }
    else {
      return (
        <div  className= 'container'>
          <Menu name = {logedUser} />
          <p>Add Question Form </p>
          <button>Add Question</button>
        </div>
      )
    }
  }
}
function mapStateToProps({logedUser, }) {
  return {
    logedUser,
  }
}

export default connect(mapStateToProps)(AddQuestion)
