import firebase from 'firebase';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from './types';

export const createUser = (values) => async (dispatch) => {
  const { name, email, password } = values;

  try {
    let authUser = await firebase.auth().createUserWithEmailAndPassword(email, password);

    let user = await firebase.database().ref(`users/${authUser.uid}`).set({
      email,
      name
    });

    dispatch({ type: CREATE_USER_SUCCESS, payload: authUser });

  } catch (err) {
    console.log(err)
    let errorMessage = '';

    switch (err.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Email is already in use.'
        break;
      default: 
        errorMessage = 'Cannot create new account. Please try again.';
    }   

    dispatch({ type: CREATE_USER_FAIL, payload: errorMessage });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  console.log(email)
};