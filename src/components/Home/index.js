import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isLogin: false, buttonText: 'Please Login', text: 'Please Login'}

  OnLogin = () => {
    const {isLogin} = this.state
    if (isLogin === false) {
      this.setState({isLogin: true, buttonText: 'Logout', text: 'Welcome User'})
    } else {
      this.setState({isLogin: false, buttonText: 'Login', text: 'Please Login'})
    }
  }

  render() {
    const {buttonText, text} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <h1>{text}</h1>
          <div>
            <button type="button" onClick={this.OnLogin}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
