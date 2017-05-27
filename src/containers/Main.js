import React from 'react';
import { 
  Route
} from 'react-router-dom';

import Dashboard from './Dashboard';
import Profile from './Profile';

const Main = () => (
  <div>
    <Route exact path='/profile' component={Profile} pageName='Profile' />
    <Route exact path='/dashboard' component={Dashboard} pageName='Dashboard' />
  </div>
);

export default Main;