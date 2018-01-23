import React, { Component } from 'react';
import './g_2048.css'

class g_2048 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RN:4, //总行数
      CN:4, //总列数
      list:[],//存储所有单元格数据的二维数组
      score:0,//保存当前分数
      state:1,//保存游戏状态：1:运行中;0:游戏结束
      gridPanelStyle:{width:'480px',height:'480px'},
      gameOveriStyle:{display:'none'}
      // RUNNING:1,//运行中
      // GAMEOVER:0,//游戏结束
    };

    this.start = this.start.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }

  start() {
    const RN = this.state.RN,
          CN = this.state.CN;
    var list = [];
    for(let r = 0; r < RN; r++){
      list.push([]);//在list中压入一个空数组
      for(let c = 0; c < CN; c++){
        list[r].push(0);//向list的r行，压入一个0
      }
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].includes(0)) {
        for(;;){
          let r=Math.floor(Math.random()*RN);//在0~RN-1之间生成一个行下标
          let c=Math.floor(Math.random()*CN);//在0~CN-1之间生成一个列下标
          if(list[r][c]===0){//如果list中r行c列等于0                               
            list[r][c]=Math.random()>0.5?4:2;//生成一个0~1随机数,如果>0.5,就在r行c列放入4,否则放入2
            break;
          }
        }
        for(;;){
          let r=Math.floor(Math.random()*RN);//在0~RN-1之间生成一个行下标
          let c=Math.floor(Math.random()*CN);//在0~CN-1之间生成一个列下标
          if(list[r][c]===0){//如果list中r行c列等于0                               
            list[r][c]=Math.random()>0.5?4:2;//生成一个0~1随机数,如果>0.5,就在r行c列放入4,否则放入2
            break;
          }
        }
        break;
      }
    }
    this.setState({
      score:0,
      state:1,
      list: list,
      gridPanelStyle:{width:CN*116+16+"px",height:RN*116+16+"px"},
      gameOveriStyle:{display:'none'}
    });
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="Welcome">
        <p>Score:<span id="score">{this.state.score}</span></p>
        <div id="gridPanel" style={this.state.gridPanelStyle}>
          {
            this.state.list.map((arr,i) => (
              arr.map((num,j)=> (
                <li id={'g'+i+j} key={'g'+i+j} className="grid"></li>
              ))
            ))
          }
          {
            this.state.list.map((arr,i) => (
              arr.map((num,j)=> (
                <li id={'c'+i+j} key={'c'+i+j} className={num?"cell n"+num:"cell"}>{num?num:''}</li>
              ))
            ))
          }
        </div>
        <div id="gameOver" style={this.state.gameOveriStyle}>
          <div>{/*灰色半透明背景*/}</div>
          {/*前景小窗*/}
          <p>Game Over!<br/>
            Score:<span id="finalScore"></span><br/>
            <a className="button" id="restart" onClick={this.start}>Try again!</a>
          </p>
        </div>
      </div>
    );
  }
  moveLeft() {
    console.log(37)
    var _this = this;
    var list = _this.state.list;
    var score = _this.state.score;
    list.forEach((arr,i)=>{
      for (let j = 0; j < arr.length; j++) {
        var nextNumIndex = arr.findIndex(function(ele,k) {//找到当前元素右边且不为0的元素
            if (k>j) {
              return ele>0;
            } else {
              return ele<0;
            }
        })
        if (nextNumIndex!==-1) {//nextNum如果存在
          if (arr[j]===0) {//如果当前元素等于0，则将后面的元素赋值给当前元素
            list[i][j]=list[i][nextNumIndex];
            list[i][nextNumIndex]=0;
            j--;
          }else if(arr[j]===list[i][nextNumIndex]){
            list[i][j]*=2;
            score+=list[i][j]
            list[i][nextNumIndex]=0;
          }
        } else {
          break;
        }
      }
    })
    for (let i = 0; i < list.length; i++) {
      if (list[i].includes(0)) {
        for(;;){
          let r=Math.floor(Math.random()*list.length);//在0~RN-1之间生成一个行下标
          let c=Math.floor(Math.random()*list[0].length);//在0~CN-1之间生成一个列下标
          if(list[r][c]===0){//如果list中r行c列等于0                               
            list[r][c]=Math.random()>0.5?4:2;//生成一个0~1随机数,如果>0.5,就在r行c列放入4,否则放入2
            break;
          }
        }
      }
      break;
    }
    this.setState({
      list: list,
      score: score
    });
  }
  moveRight() {
    console.log(39)
    // var list = this.state.list;
    this.setState({
      // list: list
    });
  }
  moveUp() {
    console.log(38)
    // var list = this.state.list;
    this.setState({
      // list: list
    });
  }
  moveDown() {
    console.log(40)
    // var list = this.state.list;
    this.setState({
      // list: list
    });
  }

  componentDidMount() {//初始化数据，组件装配后立即调用
    this.start();
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {//可以进行DOM操作
    var _this = this;
    window.document.onkeydown=function(){
      if(_this.state.state===1){
        var e=window.event||arguments[0];
        e.preventDefault();//阻止默认事件
        var code=e.keyCode;
        //左37  上38   右39   下40
        if(code===37){
          _this.moveLeft();
        }else if(code===39){
          _this.moveRight();
        }else if(code===38){
          _this.moveUp();
        }else if(code===40){
          _this.moveDown();
        }
      }
    }
  }

  componentWillUnmount() {//在组件被卸载和销毁前调用

  }
}

export default g_2048;
