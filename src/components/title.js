import React from 'react';

export default (props) => (
  <h1 onClick={props.doThingsAfterClicked} style={props.style}>{props.text}</h1>    
);
