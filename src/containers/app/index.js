import React from 'react';
import Home from '../home'
import About from '../about'
import Login from '../login'
import { Route } from 'react-router-dom'
import PrivateRoute from './privateRoute'


const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <PrivateRoute path="/about-us" component={About} />
  </main>
)

export default App
