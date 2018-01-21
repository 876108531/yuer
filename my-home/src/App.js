import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }
  getWindowHeight() {
    return this.innerHeight;
  }
  render() {
    var _this = this;
    var windowHeight = _this.getWindowHeight.call(window);
    console.log(windowHeight);
    return (
      <div className="App">
        <header className="App-header transparent">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My-home</h1>
        </header>
        <p className="App-intro transparent">
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        </p>
        <div className="App-body" style={{height:windowHeight}}>
          <a href="javascript:">2048</a>
        </div>
      </div>
    );
  }
}

export default App;
