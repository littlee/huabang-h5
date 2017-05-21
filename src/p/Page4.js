import React from 'react'
import './page4.css'
import { range } from 'lodash'

class Page4 extends React.Component {
  render() {
    return (
      <div className="page4">
        <div className="page4-month-check">您本月已签到 {4} 次</div>
        <button type="button" className="page4-check-btn">立即签到</button>
        <div className="page4-total">
          本日签到: {1234} 人
          &nbsp;&nbsp;&nbsp;&nbsp;
          本月累计签到：{1234} 次
        </div>

        <div className="page4-balls">
          {
            range(32).map((item, index) => {
              if (index === 7) {
                return (
                  <div className="page4-ball" key={index}>
                    <div className="page4-ball-item yellow"></div>
                  </div>
                  )
              }

              if (index === 15) {
                return (
                  <div className="page4-ball" key={index}>
                    <div className="page4-ball-item purple"></div>
                  </div>
                  )
              }

              if (index === 23) {
                return (
                  <div className="page4-ball" key={index}>
                    <div className="page4-ball-item green"></div>
                  </div>
                  )
              }

              if (index === 31) {
                return (
                  <div className="page4-ball" key={index}>
                    <div className="page4-ball-item red"></div>
                  </div>
                  )
              }

              return (
                <div className="page4-ball" key={index}>
                  <div className="page4-ball-item blue check"></div>
                </div>
                )
            })
          }
        </div>
      </div>
      )
  }
}

export default Page4