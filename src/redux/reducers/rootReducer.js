import {combineReducers} from 'redux';
import layout from './layoutReducer';

const rootReducer = combineReducers({
  layout
});

export default rootReducer;