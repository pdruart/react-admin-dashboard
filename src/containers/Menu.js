import React from 'react';

import MenuItem from '../components/MenuItem';

class Menu extends React.Component {

  state = { open: false };

  render()  {
    return (
      <div>
        <div className='brand'>
          <h2 className='title'>React Admin</h2>
        </div>
        <ul>
          <MenuItem link='/dashboard' linkText='Dashboard' iconName='tachometer' />
          <MenuItem link='#' linkText='Shop' iconName='shopping-cart' />
          <MenuItem link='#' linkText='Products' iconName='tags' />
          <MenuItem link='#' linkText='Orders' iconName='list' />
          <MenuItem link='#' linkText='Customers' iconName='group' />
          <MenuItem link='#' linkText='Analytics' iconName='bar-chart' />
          <MenuItem link='#' linkText='Settings' iconName='gear' />
        </ul> 
      </div>
      
    );
  }
}

export default Menu;