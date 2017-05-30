import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { Loader } from 'semantic-ui-react';

import { firebaseConfig } from '../config';

import Menu from './Menu';
import Main from './Main';
import NavBar from '../components/NavBar';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import Welcome from '../components/Welcome';


class App extends React.Component {

  state = { loggedIn: false, loading: true }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        this.setState({ loggedIn: true, loading: false });
      } else {
        this.setState({ loggedIn: false, loading: false });
      }
    });
  }

  render()  {
    const loggedIn  = this.state.loggedIn;

    if (this.state.loading) {
      return (
          <Loader />   
      );
    } else {
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
          <div className='welcomeContainer'>   
            <div className='container mainContainer'>
              <NavBar />
              <Route exact path='/' component={Welcome} />
              <Route path='/signIn' component={SignIn} />   
              <Route path='/signUp' component={SignUp} />      
            </div>     
          </div> 
        );
      } 
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

/**
 *  withRouter is a HOC to work around the issue of connect() conflict 
 *  with the current version of React Router.
 *  This might change in future releases
 */

export default withRouter(connect(mapStateToProps)(App));