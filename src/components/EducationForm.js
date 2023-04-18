import { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props)
    
    this.nextEntryKey = 0
    this.state = {
      entries: props.content.slice()
    }

    this.addEntry = this.addEntry.bind(this)
    this.removeEntry = this.removeEntry.bind(this)
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
    newList.splice(0, 1)

    this.setState({
      entries: newList
    })
  }

  render() {
    const entries = this.state.entries

    if (entries.length === 0) {
      return (
        <button type="button" onClick={(e) => this.addEntry(0)}>+ Add</button>
      )
    }

    const entriesRendered = entries.map((e, i) => {
      const output = (
        <div key={this.nextEntryKey}>Test #{i}
          <button type="button" onClick={(event) => this.addEntry(i)}>+ Add</button>
          <button type="button" onClick={(event) => this.removeEntry(i)}>- Remove</button>
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

export default EducationForm
