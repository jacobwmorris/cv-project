import { Component } from "react"
import GeneralForm from "./GeneralForm"
import EducationForm from "./EducationForm"
import EmploymentForm from "./EmploymentForm"
import "../style/EditView.css"

class EditView extends Component {
  render() {
    const {generalContent, educationContent, employmentContent, handleSubmit} = this.props
    
    return (
      <div className="EditView-container">
        <h1 className="EditView-underline">Editing</h1>
        <form onSubmit={handleSubmit}>
          <h2 className="EditView-underline">General information</h2>
          <GeneralForm content={generalContent}/>
          <h2 className="EditView-underline">Education</h2>
          <EducationForm entries={educationContent}/>
          <h2 className="EditView-underline">Employment history</h2>
          <EmploymentForm entries={employmentContent}/>
          <button className="EditView-button" data-btn-done>Done</button>
        </form>
      </div>
    )
  }
}

export default EditView
