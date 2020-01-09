import React, { Component } from 'react'

class nowy extends Component {
  render () {
    const { id } = this.props.location.state

    return(
      <p>{id}</p>

    )
  }

}
export default nowy
