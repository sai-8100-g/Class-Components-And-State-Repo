import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isHide1: false,
    isHide2: false,
  }

  OnDisplay1 = () => {
    const {isHide1} = this.state
    if (isHide1 === false) {
      this.setState({isHide1: true, className1: 'name', firstName: 'Joe'})
    } else {
      this.setState({isHide1: false, className1: '', firstName: ''})
    }
  }

  OnDisplay2 = () => {
    const {isHide2} = this.state

    if (isHide2 === false) {
      this.setState({isHide2: true, className2: 'name', secondName: 'Jonas'})
    } else {
      this.setState({isHide2: false, className2: '', secondName: ''})
    }
  }

  render() {
    const {className1, className2, firstName, secondName} = this.state

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="button-container">
          <button type="button" onClick={this.OnDisplay1}>
            Show/Hide Firstname
          </button>
          <button type="button" onClick={this.OnDisplay2}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="name-container">
          <div className={className1}>
            <p>{firstName}</p>
          </div>
          <div className={className2}>
            <p>{secondName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
