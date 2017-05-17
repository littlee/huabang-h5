import React from 'react'
import './page3.css'

const Page3 = (props) => {
  return (
    <div className="page3">
      <div className="page3-form">
        <img src="/images/ziliao.png" alt=""/>
        <form>
          <div className="page3-form-item">
            <div className="page3-form-label">姓名</div>
            <div className="page3-form-control">
              <input type="text"/>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Page3