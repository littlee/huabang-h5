import React from 'react'
import './page3.css'
import fto from 'form_to_object'

class Page3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: ''
    }
  }

  render() {
    return (
      <div className="page3">
        <form className="page3-form" onSubmit={this._submit}>
          <div className="page3-form-item">
            <div className="page3-form-label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</div>
            <div className="page3-form-control">
              <input type="text" name="name"/>
            </div>
          </div>
          <div className="page3-form-item">
            <div className="page3-form-label">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</div>
            <div className="page3-form-control">
              <input type="tel" name="phone"/>
            </div>
          </div>
          <div className="page3-form-item">
            <div className="page3-form-label">所在连锁</div>
            <div className="page3-form-control">
              <input type="text" name="store"/>
            </div>
          </div>
          <div className="page3-form-item">
            <div className="page3-form-label">单位地址</div>
            <div className="page3-form-control">
              <input type="text" name="addr"/>
            </div>
          </div>
          <div className="page3-form-err">
            {this.state.err}
          </div>

          <input type="image" src="/images/tijiao_btn.png" className="page3-btn"/>
        </form>
      </div>
      )
  }

  _submit = (e) => {
    e.preventDefault()
    var data = fto(e.target)

    if (!data.name) {
      return this.setState({
        err: '请填写姓名'
      })
    }

    if (!data.phone) {
      return this.setState({
        err: '请填写电话'
      })
    }

    if (!data.store) {
      return this.setState({
        err: '请填写所在连锁'
      })
    }

    if (!data.addr) {
      return this.setState({
        err: '请填写单位地址'
      })
    }
  }
}

export default Page3