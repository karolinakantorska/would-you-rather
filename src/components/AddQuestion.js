import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Menu from './Menu'

class AddQuestion extends Component {
  state= {
    textOne:'',
    textTwo:'',
  }

  setTextToState= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  resetstate=()=>{
    this.setState({textOne:'', textTwo:'',})
  }

//// TODO: ADD TEXT TO STORE AND BACKSERVER

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
        <div  className= 'container'>
          <Menu  name = {logedUserName} />
          <h1>Add Question </h1>
          <h2>Would you rather... </h2>
            <div >

              <label>Answer One:</label><br/>
                <input type='text' onChange= {this.setTextToState} value= {textOne} name= 'textOne' /><br/>


              <label>Answer Two:</label><br/>
                <input type='text' onChange= {this.setTextToState} value= {textTwo} name= 'textTwo' /><br/>

              <input type="submit" value='add question' />
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
