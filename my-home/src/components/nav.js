import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {}

  render() {
    return (
      <ul className="App-nav">
        <Link to='/welcome' key={0}>
          <li className="a left">home</li>
        </Link>
        <Link to='/g_2048' key={1}>
          <li className="a left">2048</li>
        </Link>
      </ul>
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

export default Nav;
