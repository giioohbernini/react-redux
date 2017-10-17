import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login'
      }}/>
    )
  )}/>
)

export default PrivateRoute
