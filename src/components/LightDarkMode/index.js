// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeDefaults = () => {
    const {isDarkMode} = this.state
    if (isDarkMode === true) {
      this.setState({
        isDarkMode: false,
      })
    } else {
      this.setState({
        isDarkMode: true,
      })
    }
  }

  render() {
    const {isDarkMode} = this.state
    const contClass = isDarkMode ? 'inner-dark-cont' : 'inner-light-cont'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="cont">
        <div className={`inner-cont ${contClass}`}>
          <h1 className="head">Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.changeDefaults}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
