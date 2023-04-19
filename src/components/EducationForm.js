import { Component } from "react";
import BasicInput from "./BasicInput"

class EducationForm extends Component {
  constructor(props) {
    super(props)
    
    this.nextEntryKey = 0
    this.state = {
      entries: props.content.slice()
    }

    this.addEntry = this.addEntry.bind(this)
    this.removeEntry = this.removeEntry.bind(this)
    this.changeEntry = this.changeEntry.bind(this)
  }

  addEntry(index) {
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
  }

  render() {
    const entries = this.state.entries

    if (entries.length === 0) {
      return (
        <div>
          <button type="button" onClick={(event) => this.addEntry(0)}>+ Add</button>
        </div>
      )
    }

    const entriesRendered = entries.map((e, i) => {
      const output = (
        <div key={this.nextEntryKey}>Test #{i}
          <EducationFormEntry entry={e}
            addCb={(event) => this.addEntry(i)}
            removeCb={(event) => this.removeEntry(i)}/>
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
    const {school, title, start, end} = this.props.entry

    return (
      <div>
        <BasicInput labelText="School" type="text" name="school" defaultValue={school}/>
        <div>
          <button type="button" onClick={this.props.addCb}>+ Add</button>
          <button type="button" onClick={this.props.removeCb}>- Remove</button>
        </div>
      </div>
    )
  }
}

export default EducationForm
