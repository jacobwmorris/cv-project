import { Component } from "react"
import General from "./General"

class DisplayView extends Component {
  render() {
    const {generalContent, educationContent, employmentContent, switcher} = this.props

    return (
      <div>
        <General content={generalContent}/>
        <button onClick={switcher}>Edit</button>
      </div>
    )
  }
}

export default DisplayView
