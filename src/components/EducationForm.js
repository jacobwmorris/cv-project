import { Component } from "react";
import BasicInput from "./BasicInput"

class EducationForm extends Component {
  constructor(props) {
    super(props)
    
    this.nextEntryKey = 0
  }

  render() {
    const {entries} = this.props

    if (!entries || entries.length === 0) {
      return (
        <div>
          <button data-btn-addedu data-index="0">+ Add</button>
        </div>
      )
    }

    const entriesRendered = entries.map((e, i) => {
      const output = <EducationFormEntry key={this.nextEntryKey} entry={e} index={i}/>
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

class EducationFormEntry extends Component {
  render() {
    const {entry, index} = this.props

    return (
      <div>
        <BasicInput labelText="School: " type="text" name="ed_school" defaultVal={entry.school}/>
        <BasicInput labelText="Title of study: " type="text" name="ed_title" defaultVal={entry.title}/>
        <BasicInput labelText="Start date: " type="date" name="ed_start" defaultVal={entry.start}/>
        <BasicInput labelText="End date: " type="date" name="ed_end" defaultVal={entry.end}/>
        <div>
          <button data-btn-addedu data-index={index + 1}>+ Add</button>
          <button data-btn-rmedu data-index={index}>- Remove</button>
        </div>
      </div>
    )
  }
}

export default EducationForm
