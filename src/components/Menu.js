import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {

  render() {
    const {name} =this.props
    return(
      <div className='menu-conteiner'>
        <div className='user-bar'>
          <div id='LogedUser'>{name}</div>
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

        </div>
      </div>
    )
  }
}




export default Menu
