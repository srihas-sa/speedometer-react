// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {counter: 0}

  onAccelerate = () => {
    const {counter} = this.state
    console.log(counter)
    if (counter < 200) {
      this.setState(prevState => ({counter: prevState.counter + 10}))
    }
  }

  onBreak = () => {
    const {counter} = this.state
    if (counter !== 0) {
      this.setState(prevState => ({counter: prevState.counter - 10}))
    }
  }

  render() {
    const {counter} = this.state
    return (
      <div className="back">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <p className="heading">Speed is {counter}mph</p>
        <p className="heading">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="roww">
          <button type="button" className="butt1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="butt2" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
