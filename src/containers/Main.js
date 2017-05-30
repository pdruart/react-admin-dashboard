import React from 'react';
import { 
  Route
} from 'react-router-dom';

import Dashboard from './Dashboard';
import Profile from './Profile';

const Main = () => (
  <div>
    <Route exact path='/dashboard' component={Dashboard} pageName='Dashboard' />
    <Route path='/profile' component={Profile} pageName='Profile' />  
  </div>
);

export default Main;