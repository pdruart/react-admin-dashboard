import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import Welcome from '../components/Welcome';

class Home extends React.Component { 

  render() {
    return (
      <div className='welcomeContainer'>   
        <section className='gradientBG'></section>
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

export default Home;