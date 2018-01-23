import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './page/welcome';
import g_2048 from './page/g_2048';
import Header from './components/header';
import Nav from './components/nav';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.getWindowHeight = this.getWindowHeight();
  }
  getWindowHeight() {
    return window.innerHeight;
  }
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Nav />
        <div className="conent"  style={{height:window.innerHeight}}>
          <Route path='/welcome' component={Welcome} />
          <Route path='/g_2048' component={g_2048} />
        </div>
      </div>
    );
  }
}

export default App;
