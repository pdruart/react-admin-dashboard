import React from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import store from '../store';

// import App from './App';
import Home from './Home';

const history = createHistory();

class Root extends React.Component {
  render()  {
    return (
      <Provider store={store}>
        <Router history={history}>   
          <Home />
        </Router>
      </Provider>
      
    );
  }
}

export default Root;