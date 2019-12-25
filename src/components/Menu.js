import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return(
      <div className='menu'>
        <div className='link-home'>
          <p>Home</p>
        </div>
        <div className='link-add'>
          <p>Add Question</p>
        </div>
        <div className='link-answeared'>
          <p>Leader Board</p>
        </div>
        <div className='link-logout'>
          <p>Logout</p>
        </div>
      </div>
    )
  }
}
export default Menu
