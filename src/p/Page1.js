import React from 'react'
import './page1.css'
import { removeClass } from '../utils/classname'

const Page1 = (props) => {
  return (
    <div className="page1">
      <img src="/images/1_2.png" alt="" className="page1-title"/>
      <img src="/images/1_1.png" alt="" className="page1-bird ing" id="page-1-bird" onAnimationEnd={(e) => {
        removeClass(e.target, 'ing')
      }}/>

      <img src="/images/kaishi_btn.png" alt="" className="page1-start" onClick={props.onClickStart}/>
      <img src="/images/paihangbang_btn.png" alt="" className="page1-rank" onClick={props.onClickRank}/>
    </div>
    )
}

export default Page1