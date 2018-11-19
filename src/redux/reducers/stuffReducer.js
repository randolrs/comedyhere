import initialState from '../store/initialState';
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return Object.assign({}, state, {
        sideOpen: action.payload
      });
    case RECEIVE_STUFF:
      newState = action.stuff;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}