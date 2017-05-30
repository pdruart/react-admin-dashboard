import React from 'react';

import Menu from './Menu';
import Header from '../components/Header';
import Overview from '../components/Overview';
import GraphSection from '../components/GraphSection';
import LatestSection from '../components/LatestSection';

class Dashboard extends React.Component {
  render()  {
    return (  
      <div className='fluid-container'>
        <div className='row'>
          <div className='aside col-md-2 sidebarMenu'>
            <Menu />
          </div>
          <div className='main col-md-10'>       
            <div className='fluid-container'>
              <Header pageTitle='Dashboard'/>
              <Overview />
              <GraphSection />
              <LatestSection />
            </div>   
          </div>
        </div> 
      </div>    
    );
  }
}

export default Dashboard;