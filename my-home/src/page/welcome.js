import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {}

  render() {
    return (
      <div className="Welcome">
        Welcome
      </div>
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

export default Welcome;
