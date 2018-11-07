import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MakeItBlue from './hoc/makeItBlue';
import Title from './components/title';
import Subheader from './components/subheader';

const BlueTitleComponent = (component) => {
  return MakeItBlue(() => component);
};

class App extends Component {
  constructor( props ){
    super( props );
    this.onTitleClicked = this.onTitleClicked.bind(this);
  }

  state = {
    subheader: 'This is a subheader',
  };

  onTitleClicked() {
    // window.alert("CLICKED");
    this.setState({ subheader: 'Title was clicked!' });
  }

  render() {
    const BlueTitle = BlueTitleComponent(
      <Title text="Hello World!!" doThingsAfterClicked={this.onTitleClicked} />
    );

    return (
      <div className="App">
        <header className="App-header">
          <BlueTitle />
          <Subheader text={this.state.subheader} />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
