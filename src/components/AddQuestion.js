import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'
import { handleAddQuestion } from '../actions/shared'

class AddQuestion extends Component {
  state= {
    textOne:'',
    textTwo:'',
  }

  setTextToState= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  resetState=()=>{
    this.setState({textOne:'', textTwo:''})
  }

  addQuestion= () => {
    const { textOne, textTwo } = this.state
    const { dispatch, logedUserID } = this.props
    dispatch(handleAddQuestion(textOne, textTwo, logedUserID))
    this.resetState()
  }

  render () {
    const {logedUserID, logedUserName} = this.props
    const { textOne, textTwo }= this.state
     if (logedUserID === '') {
       return (
             <Redirect to= '/login' />
       )
     }
    else {
      return (
        <div  >
          <Menu  name = {logedUserName} />

        <div className= 'container' >
          <div  className= 'add'>
            <p>Add Question </p>
            <h2 className='special-text' >Would you rather... </h2>
            <div className='add-form'>
              <label>Answer One: </label>
                <input type='text' onChange= {this.setTextToState} value= {textOne} name= 'textOne' /><br/>
              <label>Answer Two: </label>
                <input type='text' onChange= {this.setTextToState} value= {textTwo} name= 'textTwo' /><br/>
              <input type="submit" value='add question' onClick= {this.addQuestion}/>
            </div>

          </div>
        </div>

        </div>
      )
    }
  }
}
function mapStateToProps({logedUser}) {
  const logedUserID = logedUser.id
  const logedUserName = logedUser.name
  return {
    logedUserID,
    logedUserName,
  }
}

export default connect(mapStateToProps)(AddQuestion)
