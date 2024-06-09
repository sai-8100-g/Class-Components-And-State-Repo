import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {buttonText: 'Light Mode', className: 'content1-container'}

  OnChangeMode = () => {
    const {buttonText} = this.state
    if (buttonText === 'Light Mode') {
      this.setState({buttonText: 'Dark Mode', className: 'content2-container'})
    } else {
      this.setState({buttonText: 'Light Mode', className: 'content1-container'})
    }
  }

  render() {
    const {buttonText, className} = this.state

    return (
      <div className="main-container">
        <div className={className}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.OnChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
