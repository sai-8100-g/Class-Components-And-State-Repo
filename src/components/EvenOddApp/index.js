import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, numType: 'Even'}

  OnIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    const type = randomNum % 2 === 0 ? 'Even' : 'Odd'
    this.setState({num: randomNum, numType: type})
  }

  render() {
    const {num, numType} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <div>
            <h1>Count {num}</h1>
          </div>
          <div className="button-container">
            <p>Count is {numType}</p>
            <button type="button" onClick={this.OnIncrement}>
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
