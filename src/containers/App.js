import React from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { firebaseConfig } from '../config';

import Menu from './Menu';
import Main from './Main';
import Welcome from './Welcome';

class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        console.log('logged in')
      } else {
        // redirect to dashboard
        console.log('not logged in')
      }
    });
  }

  render()  {

    const { loggedIn } = this.props.auth;

    if (loggedIn) {
      return (
        <div className='fluid-container'>
          <div className='row'>
            <div className='aside col-md-2 menu'>
              <Menu />
            </div>
            <div className='main col-md-10'>
              <Main />
            </div>
          </div> 
        </div>    
      );
    } else {
      return (
        <div className='fluid-container'>
          <Welcome />
        </div>    
      );
    } 
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);