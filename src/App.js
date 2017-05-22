import React, { Component } from 'react';
import './App.css';
import Page1 from './p/Page1'
import Page2 from './p/Page2'
import Page3 from './p/Page3'
import Page4 from './p/Page4'
import Page5 from './p/Page5'
import Page6 from './p/Page6'
import Page7 from './p/Page7'
import Page8 from './p/Page8'

var assets = [
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
      page: 5,
      manStep: 6
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
        { page === 1 ? <Page1 onClickStart={this._clickPage1Start} onClickRank={this._clickPage1Rank}/> : null }
        { page === 2 ? <Page2 step={this.state.manStep}/> : null }
        { page === 3 ? <Page3 /> : null }
        { page === 4 ? <Page4 /> : null }
        { page === 5 ? <Page5 /> : null }
        { page === 6 ? <Page6 /> : null }
        { page === 7 ? <Page7 /> : null }
        { page === 8 ? <Page8 /> : null }
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

  _clickPage1Start = () => {
    this.setState({
      page: 2
    })
  }

  _clickPage1Rank = () => {
    this.setState({
      page: 8
    })
  }
}

export default App;
