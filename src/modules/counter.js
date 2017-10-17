export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

/* Reduce part - Start */

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

/* Reduce part - end */
/* Action part - Start */

export const increment = () => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter.count >= 10) {
      return;
    }
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }

}

export const incrementAsync = () => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter.count >= 10) {
      return;
    }
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch(increment())
    }, 1000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch(decrement())
    }, 1000)
  }
}
