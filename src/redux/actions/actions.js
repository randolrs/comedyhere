import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function fetchStuff() {
  return {type: types.FETCH_STUFF, payload: true};
}