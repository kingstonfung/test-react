import React from 'react';

export default (WrappedComponent) => {
  return class MakeItBlue extends React.Component {
    render() {
      return (
        <div style={{color: '#00F'}}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  };
};
