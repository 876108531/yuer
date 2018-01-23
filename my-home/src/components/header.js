import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {}

  render() {
    return (
      <header className="App-header transparent">
          <img src={this.props.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My-home</h1>
      </header>
    );
  }

  componentDidMount() {//初始化数据，组件装配后立即调用
    
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {//可以进行DOM操作

  }

  componentWillUnmount() {//在组件被卸载和销毁前调用

  }
}

export default Header;
