import React, { Component } from 'react';
import './App.css';
import Page1 from './p/Page1'
import Page2 from './p/Page2'
import Page3 from './p/Page3'

var assets = [
  '/images/kaishi.jpg',
  '/images/beijing.jpg',
  '/images/chuangguanchenggong.jpg',
  '/images/ditu.jpg',
  '/images/guangrongbang.jpg',
  '/images/henyihan.jpg',
  '/images/tijiao_btn.png',
  '/images/wenti.png',
  '/images/xiayiti.png',
  '/images/xuexineirong.png',
  '/images/yaogao.gif',
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      percent: 0,
      page: 3
    }
  }

  componentDidMount() {
    // var img = new Image()
    // img.onload = this._loadImage
    // img.src = assets.shift()
  }

  render() {
    var { page } = this.state
    return (
      <div className="app">
        { page === 0 ? <Progress percent={(this.state.percent / totalAssets).toFixed(2) * 100} /> : null }
        { page === 1 ? <Page1 /> : null }
        { page === 2 ? <Page2 /> : null }
        { page === 3 ? <Page3 /> : null }
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
