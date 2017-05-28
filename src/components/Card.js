import React from 'react';

export default class Card extends React.Component {

  render() {
    return(
      <div className='card vCard'>
        {this.props.children}
      </div>
    );
  }
}