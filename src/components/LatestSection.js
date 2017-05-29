import React from 'react';
import { Card } from 'semantic-ui-react';

export default class LatestSection extends React.Component {

  render() {
    return (
      <section className='latestSection'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <h2>Latest Orders</h2>
            <Card>
              <p>This is a Card</p>
            </Card>
          </div>
          <div className='col-md-6 col-sm-12'>
            <h2>Latest Visitors</h2>  
             <Card>
               <p>This is a Card</p>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}