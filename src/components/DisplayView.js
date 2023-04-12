import { Component } from "react"

class DisplayView extends Component {
  render() {
    const {switcher, content} = this.props
    return <div>
        <h1>Displaying</h1>
        <button onClick={switcher}>Edit</button>
    </div>
  }
}

export default DisplayView
