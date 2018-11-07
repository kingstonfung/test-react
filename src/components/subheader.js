import React from 'react';

class Subheader extends React.PureComponent {
  render() {
    return (
      <h2>{this.props.text}</h2>
    )
  }
};

export default Subheader;