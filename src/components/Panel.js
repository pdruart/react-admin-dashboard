import React from 'react';
import FontAwesome from 'react-fontawesome';

class Panel extends React.Component {
  render() {
    return (
      <div className='panel'>      
        <div className='panelContent'>
          {this.props.title}
        </div>
        <div className='panelImage'>{this.props.image ? this.props.image : <FontAwesome name='cog' /> }</div>
      </div>
    );
  }
}

export default Panel;