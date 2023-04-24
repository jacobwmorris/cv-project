import { Component } from "react"
import General from "./General"
import Education from "./Education"

class DisplayView extends Component {
  render() {
    const {generalContent, educationContent, employmentContent, handleEdit} = this.props

    return (
      <div>
        <General content={generalContent}/>
        <Education entries={educationContent}/>
        <button onClick={handleEdit}>Edit</button>
      </div>
    )
  }
}

export default DisplayView
