import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

import { signOut } from '../actions';

class AccountMenu extends React.Component {

  signOut = () => this.props.signOut();

  render() {
    return (          
      <div className='accountMenu'>
        <button className='btnCommon btnOutline' onClick={this.signOut}>Sign Out</button>
      </div>  
    );
  }
}

const mapsStateToProps = state => ({
  auth: state.auth
});

export default connect(mapsStateToProps, {signOut})(AccountMenu);