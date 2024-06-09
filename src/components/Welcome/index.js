import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  OnSubscribe = () => {
    const {text} = this.state

    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    } else {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state

    return (
      <div className="main-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <div>
          <button type="button" onClick={this.OnSubscribe}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
