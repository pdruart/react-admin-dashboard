import React from 'react';
import { connect } from 'react-redux';
import { Message, Loader } from 'semantic-ui-react';

import SignUpForm from './SignUpForm';

class SignUp extends React.Component {

  state = { loading: false, errors: [] };

  onSubmit = ({ email, password }) => {
    this.setState({ loading: true });
  }

  render() {

    return (
      <div>
        <Loader active={this.state.loading} inline='centered' />
        <SignUpForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form
})

export default connect(mapStateToProps)(SignUp);