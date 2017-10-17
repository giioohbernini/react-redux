import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  loginVerify,
  userChanged,
  pwChanged
} from './loginActions.js'

import './login.css'

class Login extends Component {

  componentDidMount() {
    if(this.props.isLogged) {
      this.props.goHome()
    }
  }

  componentDidUpdate() {
    if(this.props.isLogged) {
      this.props.goHome()
    }
  }

  render () {
    return (
      <div className="container">
        <div className="form-content">
          <label htmlFor="user">Usuário</label>
          <div className="formrow">
            <input onChange={(this.props.userChanged)} type="text" name="user" />
          </div>

          <label htmlFor="pw">Senha</label>
          <div className="formrow">
            <input onChange={(this.props.pwChanged)} type="password" name="pw" />
          </div>

          <button onClick={() => this.props.loginVerify()} className="btn">Entrar</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLogged: state.login.isLogged
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loginVerify,
  userChanged,
  pwChanged,
  goHome: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
