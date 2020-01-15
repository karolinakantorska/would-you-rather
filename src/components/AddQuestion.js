import React, { Component } from 'react'
import { connect } from 'react-redux'
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

  addQuestion= () => {
    const { textOne, textTwo } = this.state
    const { dispatch, logedUserID } = this.props
    dispatch(handleAddQuestion(textOne, textTwo, logedUserID))
    .then (() => this.setState({textOne:'', textTwo:''}))
      .then(() => this.props.history.push('/'))
  }

  render () {
    const { textOne, textTwo }= this.state
      return (
        <div  >
          <Menu />
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
function mapStateToProps({logedUser}) {
  const logedUserID = logedUser.id
  return {
    logedUserID
  }
}

export default connect(mapStateToProps)(AddQuestion)
