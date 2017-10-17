const initialState = {
  isLogged: false,
  user: '',
  pw: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_VERIFY':
      return {
        ...state,
        isLogged: true
      }

    case 'USER_CHANGED':
      return {
        ...state,
        user: action.payload
      }

    case 'PW_CHANGED':
      return {
        ...state,
        pw: action.payload
      }

    default:
      return state
  }
}
