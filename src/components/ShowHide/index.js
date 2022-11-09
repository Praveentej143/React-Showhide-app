// Write your code here
import {Component} from 'react'

import './index.css'

class Showhide extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div>
              <button
                className="btn"
                type="button"
                onClick={this.onShowFirstName}
              >
                Show/Hide Firstname
              </button>
              {showFirstName && <p className="card">Joe</p>}
            </div>
            <div>
              <button
                className="btn"
                type="button"
                onClick={this.onShowLastName}
              >
                Show/Hide Lastname
              </button>
              {showLastName && <p className="card">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Showhide
