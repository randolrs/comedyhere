import initialState from '../store/initialState';
import { TOGGLE_SIDENAV } from '../actions/actionTypes';

export default function layout(state = initialState, action) {
  let newState;
  switch (action.type) {
    case TOGGLE_SIDENAV:
      console.log('TOGGLE_SIDENAV Action')
      return Object.assign({}, state, {
        sideOpen: action.payload
      });
    default:
      return state;
  }
}
