import { Component } from "react";
import BasicInput from "./BasicInput"
import TextAreaInput from "./TextAreaInput"
import "../style/FormStyles.css"

class EmploymentForm extends Component {
  constructor(props) {
    super(props)
    
    this.nextEntryKey = 0
  }

  render() {
    const {entries} = this.props

    if (!entries || entries.length === 0) {
      return (
        <div>
          <button data-btn-addemp data-index="0" className="FormStyles-greenbtn">+ Add</button>
        </div>
      )
    }

    const entriesRendered = entries.map((e, i) => {
      const output = <EmploymentFormEntry key={this.nextEntryKey} entry={e} index={i}/>
      this.nextEntryKey++
      return output
    })

    return (
      <div>
        {entriesRendered}
      </div>
    )
  }
}

class EmploymentFormEntry extends Component {
  render() {
    const {entry, index} = this.props

    return (
      <div className="FormStyles-entry">
        <BasicInput labelText="Company: " type="text" name="em_company" defaultVal={entry.company}/>
        <BasicInput labelText="Position: " type="text" name="em_position" defaultVal={entry.position}/>
        <BasicInput labelText="Start date: " type="date" name="em_start" defaultVal={entry.start}/>
        <BasicInput labelText="End date: " type="date" name="em_end" defaultVal={entry.end}/>
        <TextAreaInput labelText="Job description:" name="em_description" defaultVal={entry.description}/>
        <div>
          <button data-btn-addemp data-index={index + 1} className="FormStyles-greenbtn">+ Add</button>
          <button data-btn-rmemp data-index={index} className="FormStyles-redbtn">- Remove</button>
        </div>
      </div>
    )
  }
}

export default EmploymentForm
