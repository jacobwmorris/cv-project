import { Component } from "react"
import General from "./General"
import Education from "./Education"
import Employment from "./Employment"
import "../style/DisplayStyles.css"

class DisplayView extends Component {
  render() {
    const {generalContent, educationContent, employmentContent, handleEdit} = this.props

    return (
      <div>
        <General content={generalContent}/>
        <Education entries={educationContent}/>
        <Employment entries={employmentContent}/>
        <button onClick={handleEdit} className="DisplayStyles-donebtn">Edit</button>
      </div>
    )
  }
}

export default DisplayView
