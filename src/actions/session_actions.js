export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';

const receiveLogin = user => ({
  type: RECEIVE_LOGIN,
  user
});

export const login = user => dispatch => {
  dispatch(receiveLogin(user))
}