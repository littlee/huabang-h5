import React from 'react'
import './page3.css'

const Page3 = (props) => {
  return (
    <div className="page3">
      <form className="page3-form">
        <div className="page3-form-item">
          <div className="page3-form-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</div>
          <div className="page3-form-control">
            <input type="text"/>
          </div>
        </div>
        <div className="page3-form-item">
          <div className="page3-form-label">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</div>
          <div className="page3-form-control">
            <input type="text"/>
          </div>
        </div>
        <div className="page3-form-item">
          <div className="page3-form-label">所在连锁</div>
          <div className="page3-form-control">
            <input type="text"/>
          </div>
        </div>
        <div className="page3-form-item">
          <div className="page3-form-label">单位地址</div>
          <div className="page3-form-control">
            <input type="text"/>
          </div>
        </div>

        <input type="image" src="/images/tijiao_btn.png" className="page3-btn"/>
      </form>
    </div>
    )
}

export default Page3