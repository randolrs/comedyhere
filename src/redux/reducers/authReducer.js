import authState from '../store/authState.js';
import { LOGIN, LOGOUT } from '../actions/actionTypes';

export default function auth(state = authState, action) {
  let newState;
  switch (action.type) {
    case LOGIN:
    //   // return Object.assign({}, state, {
    //   //   sideOpen: action.payload
    //   // });
    case LOGOUT:
    //   // return Object.assign({}, state, {
    //   //   sideOpen: action.payload
    //   // });
    default:
      return state;
  }
}
