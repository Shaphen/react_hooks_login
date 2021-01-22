import { RECEIVE_LOGIN } from '../actions/session_actions';

const initialState = {
  token: null
}

export default (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LOGIN:
      return Object.assign({}, { token: action.user })
    default:
      return state
  }
}