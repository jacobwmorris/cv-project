import { Component } from "react"
import EducationForm from "./EducationForm"
import GeneralForm from "./GeneralForm"

class EditView extends Component {
  render() {
    const {generalContent, educationContent, employmentContent, switcher} = this.props
    
    return (
      <div>
        <h1>Editing</h1>
        <form onSubmit={switcher}>
          <h2>General information</h2>
          <GeneralForm content={generalContent}/>
          <h2>Education</h2>
          <EducationForm content={educationContent}/>
          <h2>Employment history</h2>
          <button>Done</button>
        </form>
      </div>
    )
  }
}

export default EditView
