import React from 'react'
import './page6.css'

class Page6 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'A'
    }
  }

  render() {
    return (
      <div className="page6">
        <div className="page6-content">
          <div className="page6-question">
            问题问题问题问题问题问题问题问题问题
          </div>

          <div className="page6-options">
            <div className={'page6-option' + (this.state.current === 'A' ? ' check' : '')} onClick={this._change.bind(this, 'A')}>A. Lorem ipsum dolor sit amet.</div>
            <div className={'page6-option' + (this.state.current === 'B' ? ' check' : '')} onClick={this._change.bind(this, 'B')}>B. Lorem ipsum dolor sit amet.</div>
            <div className={'page6-option' + (this.state.current === 'C' ? ' check' : '')} onClick={this._change.bind(this, 'C')}>C. Lorem ipsum dolor sit amet.</div>
            <div className={'page6-option' + (this.state.current === 'D' ? ' check' : '')} onClick={this._change.bind(this, 'D')}>D. Lorem ipsum dolor sit amet.</div>
          </div>

          <img src="/images/xiayiti.png" alt="" className="page6-next"/>
        </div>
      </div>
      )
  }

  _change = (o) => {
    this.setState({
      current: o
    })
  }
}

export default Page6