import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import { Route, Redirect, withRouter } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { logedUserID, location } = rest
  console.log('location')
  console.log(location.pathname)
  return (
    <Route
      {...rest}
      render={props =>
        logedUserID === '' ? (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                referrer: location.pathname
              }
            }}
          />

        ) : (
          <Component {...props} />
      )}
    />
  )
}
function mapStateToProps ({ logedUser }, props) {
  const logedUserID = logedUser.id
  return {
    logedUserID
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
