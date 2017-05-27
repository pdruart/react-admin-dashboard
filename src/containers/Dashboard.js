import React from 'react';

import Header from '../components/Header';
import HCard from '../components/HCard';

class Dashboard extends React.Component {
  render()  {
    return (
      <div className='fluid-container'>
        <Header pageTitle='Dashboard'/>
        <section className='overview'>
          <div className='row'>
            <div className='col-sm-3'>
              <HCard iconName='users' backgroundColor='teal' label='users' number={42356} />
            </div>
            <div className='col-sm-3'>
              <HCard iconName='tags' backgroundColor='pink' label='products' number={1256} />
            </div>
            <div className='col-sm-3'>
              <HCard iconName='shopping-cart' backgroundColor='amber' label='revenue' number={178356} prefix='$' />
            </div>
            <div className='col-sm-3 '>
              <HCard iconName='bar-chart' backgroundColor='cyan' label='goal' number={85} suffix='%' />
            </div>
          </div>
        </section>

        <section className='charts'>
          
        </section>
      </div>
      
    );
  }
}

export default Dashboard;