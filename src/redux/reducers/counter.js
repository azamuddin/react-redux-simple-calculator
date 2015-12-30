/**
 * counter.js
 * Counter Reducer
 */

let initialState = 0
let ACTION = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

function counter(state = initialState, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
        return state + action.payload.number
    case ACTION.DECREMENT:
        return state - action.payload.number
    default:
      return state
  }
  return state
}


export default counter