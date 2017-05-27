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
          <MenuItem link='/profile' linkText='Profile' iconName='user-o' />
        </ul> 
      </div>
      
    );
  }
}

export default Menu;