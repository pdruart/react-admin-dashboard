import React from 'react';
import Panel from './Panel'; 

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1>{this.props.pageTitle}</h1>
        <nav className='headerNav pullRight'>
          <Panel title='Account' />
        </nav>
      </div>
      
    );
  }
}

export default Header;