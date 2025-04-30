import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count < 200 ? prevState.count + 10 : 200,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count > 0 ? prevState.count - 10 : 0,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <h1 className="heading"> SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt=" should be speedometer"
          className="image"
        />
        <h1 className=""> Speed is {count}mph</h1>
        <p className=""> Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" type="button" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className=" button2" type="button" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
