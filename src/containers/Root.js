import React from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom';
// import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import store from '../store';
import App from './App';

const history = createHistory();
// const history = syncHistoryWithStore(createHistory(), store);

class Root extends React.Component {
  render()  {
    return (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
      
    );
  }
}

export default Root;