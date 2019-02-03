import {combineReducers} from 'redux';
import layout from './layoutReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  layout,
  auth
});

export default rootReducer;
