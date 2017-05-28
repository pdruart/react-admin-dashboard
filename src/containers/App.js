import React from 'react';

import Menu from './Menu';
import Main from './Main';

class App extends React.Component {
  render()  {
    return (
      <div className='fluid-container'>
        <div className='row'>
          <div className='aside col-md-2 menu'>
            <Menu />
          </div>
          <div className='main col-md-10'>
            <Main />
          </div>
        </div> 
      </div>    
    );
  }
}

export default App;