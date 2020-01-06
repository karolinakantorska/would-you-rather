import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLogedUser} from '../actions/logedUser'
import { Link } from 'react-router-dom'


class Menu extends Component {

  logout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setLogedUser('',''))
  }

  render() {
    const {name, logedUser, dispatch} =this.props


// TODO name of loged uner. not a nick name
    return(
      <div className='menu-conteiner'>
        <div className='user-bar'>
          <div id="LogedUser">{name}</div>
        </div>
        <div className='menu'>
          <Link to='/' className='link-left'>
            <p>Home</p>
          </Link>
          <Link to='/addQuestion' className='link'>
            <p>Add Question</p>
          </Link>
          <Link to='/leader' className='link'>
            <p>Leader Board</p>
          </Link >
          <Link to='/login' className='link-right' onClick= {this.logout} >
            <p>Logout</p>
          </Link >
        </div>
      </div>
    )
  }
}
function mapStateToProps({logedUser}){
  return{
    logedUser
  }
}
export default connect(mapStateToProps)(Menu)
