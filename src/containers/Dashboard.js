import React from 'react';

import Header from '../components/Header';
import Overview from '../components/Overview';
import GraphSection from '../components/GraphSection';
import LatestSection from '../components/LatestSection';

class Dashboard extends React.Component {
  render()  {
    return (
      <div className='fluid-container'>
        <Header pageTitle='Dashboard'/>
          <Overview />
          <GraphSection />
          <LatestSection />
      </div>   
    );
  }
}

export default Dashboard;