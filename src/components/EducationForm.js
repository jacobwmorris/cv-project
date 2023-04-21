import { Component } from "react";
import BasicInput from "./BasicInput"

class EducationForm extends Component {
  constructor(props) {
    super(props)
    
    this.nextEntryKey = 0

    /* this.addEntry = this.addEntry.bind(this)
    this.removeEntry = this.removeEntry.bind(this)
    this.changeEntry = this.changeEntry.bind(this) */
  }

/*   addEntry(index) {
    const newEntry = {
      school: "",
      title: "",
      start: new Date(),
      end: new Date()
    }
    const newList = this.state.entries.slice()
    newList.splice(index, 0, newEntry)

    this.setState({
      entries: newList
    })
  }

  removeEntry(index) {
    const newList = this.state.entries.slice()
    newList.splice(index, 1)

    this.setState({
      entries: newList
    })
  }

  changeEntry(index, newEntry) {
    const newList = this.state.entries.slice()
    newList.splice(index, 1, newEntry)

    this.setState({
      entries: newList
    })
  } */

  render() {
    const entries = this.props.entries

    if (!entries || entries.length === 0) {
      return (
        <div>
          <button type="button">+ Add</button>
        </div>
      )
    }

    const entriesRendered = entries.map((e, i) => {
      const output = (
        <div key={this.nextEntryKey}>Test #{i}
          <EducationFormEntry entry={e}/>
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
    const {school, title, start, end, addCb, removeCb} = this.props.entry

    return (
      <div>
        <BasicInput labelText="School: " type="text" name="ed_school" defaultValue={school}/>
        <BasicInput labelText="Title of study: " type="text" name="ed_title" defaultValue={title}/>
        <BasicInput labelText="Start date: " type="date" name="ed_start" defaultValue={start}/>
        <BasicInput labelText="End date: " type="date" name="ed_end" defaultValue={end}/>
        <div>
          <button type="button">+ Add</button>
          <button type="button">- Remove</button>
        </div>
      </div>
    )
  }
}

export default EducationForm
