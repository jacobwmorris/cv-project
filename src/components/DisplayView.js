import { Component } from "react"
import General from "./General"

class DisplayView extends Component {
  render() {
    const {switcher, content} = this.props

    return (
      <div>
        <General content={content.general}/>
        <button onClick={switcher}>Edit</button>
      </div>
    )
  }
}

export default DisplayView
