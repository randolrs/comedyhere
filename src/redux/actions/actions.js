import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function closeSidenav() {
  return {type: types.TOGGLE_SIDENAV, payload: false};
}

export function openSidenav() {
  return {type: types.TOGGLE_SIDENAV, payload: true};
}

// export function toggleSidenav(open = true) {
//   return {type: types.FETCH_STUFF, payload: open};
// }