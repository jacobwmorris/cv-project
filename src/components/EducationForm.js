import { Component } from "react";
import BasicInput from "./BasicInput"

class EducationForm extends Component {
  constructor(props) {
    super(props)
    
    this.nextEntryKey = 0
  }

  render() {
    const {entries, addEntry, removeEntry} = this.props

    if (!entries || entries.length === 0) {
      return (
        <div>
          <button type="button" onClick={(e) => addEntry(0)}>+ Add</button>
        </div>
      )
    }

    const entriesRendered = entries.map((e, i) => {
      const output = (
        <div key={this.nextEntryKey}>Test #{i}
          <EducationFormEntry entry={e} addEntry={(event) => addEntry(i + 1)} removeEntry={(event) => removeEntry(i)}/>
        </div>
      )

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
    const {entry, addEntry, removeEntry} = this.props

    return (
      <div>
        <BasicInput labelText="School: " type="text" name="ed_school" defaultVal={entry.school}/>
        <BasicInput labelText="Title of study: " type="text" name="ed_title" defaultVal={entry.title}/>
        <BasicInput labelText="Start date: " type="date" name="ed_start" defaultVal={entry.start}/>
        <BasicInput labelText="End date: " type="date" name="ed_end" defaultVal={entry.end}/>
        <div>
          <button type="button" onClick={addEntry}>+ Add</button>
          <button type="button" onClick={removeEntry}>- Remove</button>
        </div>
      </div>
    )
  }
}

export default EducationForm
