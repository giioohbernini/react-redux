export const loginVerify = () => {
  return(dispatch, getState) => {
    const { login } = getState()

    console.log(login);

    if (login.user === 'gigio' && login.pw === 'gigio123') {
      dispatch({
        type: 'LOGIN_VERIFY'
      })
    }
  }
}

export const userChanged = e => {
  return dispatch => {
    dispatch({
      type: 'USER_CHANGED',
      payload: e.target.value
    })
  }
}

export const pwChanged = e => {
  return dispatch => {
    dispatch({
      type: 'PW_CHANGED',
      payload: e.target.value
    })
  }
}
