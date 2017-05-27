import { combineReducers } from 'redux';
// import { routerStateReducer } from 'redux-react-router';
// import { routerReducer } from 'react-router-redux';

import auth from './auth_reducer';

export default combineReducers({
  // router: routerStateReducer,
  // routing: routerReducer,
  auth,
});