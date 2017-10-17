import { combineReducers  } from 'redux'
import { routerReducer  } from 'react-router-redux'
import counter from './counter'
import login from '../containers/login/loginReducer'

export default combineReducers({
  routing: routerReducer,
  counter,
  login
})
