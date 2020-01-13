import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLogedUser} from '../actions/logedUser'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


class Menu extends Component {

  logout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setLogedUser('',''))
  }

  render() {
    const {logedUserName, logedUser, dispatch} =this.props

    return(
      <div className='menu-container'>
        <div className='user-bar'>
          <div id="LogedUser">{logedUserName}</div>
        </div>
        <div className='menu'>
          <Link to='/' className='link-left' >
            <p>Home</p>
          </Link>
          <Link to='/add' className='link'>
            <p>Add Question</p>
          </Link>
          <Link to='/leaderboard' className='link'>
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
  const logedUserName = logedUser.name
  return{
    logedUser,
    logedUserName
  }
}
export default connect(mapStateToProps)(Menu)
