import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import Main from './Main';
import Profile from './Profile';
import Header from '../components/Header';
import Overview from '../components/Overview';
import GraphSection from '../components/GraphSection';
import LatestSection from '../components/LatestSection';


class Dashboard extends React.Component {

  render()  {
    const { match } = this.props;

    console.log(match.url)
    return (  
      <div className='fluid-container'>
        <div className='row'>
          <div className='aside col-md-2 col-sm-3 sidebarMenu'>
            <Menu />
          </div>
          <div className='main col-md-10'>       
            <div className='fluid-container'>
              <Route exact path='/' component={Main} />
              <Route path='/profile' component={Profile} />
            </div>
          </div> 
        </div> 
      </div>    
    );
  }
}

export default Dashboard;