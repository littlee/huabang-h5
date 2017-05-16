import React, { Component } from 'react';
import './App.css';

var assets = [
  '/images/beijing.jpg',
  '/images/chuangguanchenggong.jpg',
  '/images/ditu.jpg',
  '/images/guangrongbang.jpg',
  '/images/henyihan.jpg',
  '/images/tijiao_btn.png',
  '/images/wenti.png',
  '/images/xiayiti.png',
  '/images/xuexineirong.png',
  '/images/yaogao.png',
  '/images/ziliao.png'
]
var totalAssets = assets.length

const Progress = (props) => {
  return (
    <div className="app-loading-overlay">
      <div className="app-loading">
        <div className="app-loading-percent" style={{ width: props.percent + '%'}}>
          {props.percent + '%'}
        </div>
      </div>
    </div>
    )
}

const Page1 = (props) => {
  return (
    <div className="page1">
    page1
    </div>
    )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      percent: 0,
      page: 0
    }
  }

  componentDidMount() {
    var img = new Image()
    img.onload = this._loadImage
    img.src = assets.shift()
  }

  render() {
    var { page } = this.state
    return (
      <div className="app">
        { page === 0 ? <Progress percent={(this.state.percent / totalAssets).toFixed(2) * 100} /> : null }
        { page === 1 ? <Page1 /> : null }
      </div>
    );
  }

  _loadImage = (e) => {
    this.setState((prevState) => {
      return {
        percent: prevState.percent + 1
      }
    })
    if (assets.length) {
      var img = new Image()
      img.onload = this._loadImage
      img.src = assets.shift()
    }
    else {
      this.setState({
        page: 1
      })
    }
  }
}

export default App;
