import React from 'react'
import './page8.css'

const ProgressBar = (props) => {
  return (
    <div className="page8-pb">
      <div className="page8-pb-inner" style={{
        width: props.percent + '%'
      }}></div>
    </div>
    )
}

class Page8 extends React.Component {

  render() {
    return (
      <div className="page8">
        <img src="/images/grb.png" alt="" width="100%"/>

        <div className="page8-ranks">
          <div className="page8-rank">
            <div className="page8-rank-num">1</div>
            <div className="page8-rank-img">
              <img src="http://placehold.it/50x50" alt=""/>
            </div>
            <div className="page8-rank-name">name</div>
            <div className="page8-rank-progress">
              <ProgressBar percent={50} />
              <span>123</span>
            </div>
            <div className="page8-rank-photos">
              <a href="#">查看相册</a>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Page8