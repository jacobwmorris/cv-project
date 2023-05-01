import General from "./General"
import Education from "./Education"
import Employment from "./Employment"
import "../style/DisplayStyles.css"

function DisplayView({generalContent, educationContent, employmentContent, handleEdit}) {
  return (
    <div>
      <General content={generalContent}/>
      <Education entries={educationContent}/>
      <Employment entries={employmentContent}/>
      <button onClick={handleEdit} className="DisplayStyles-donebtn">Edit</button>
    </div>
  )
}

export default DisplayView
