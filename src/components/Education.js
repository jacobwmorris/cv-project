import {Component} from "react"
import dateToMonth from "../DateToMonth"

class Education extends Component {
  constructor(props) {
    super(props)

    this.nextEntryKey = 0
  }

  render() {
    const {entries} = this.props

    if (!entries || entries.length === 0) {
      return null
    }

    const entriesRendered = entries.map((e) => {
      const output = <EducationEntry key={this.nextEntryKey} entry={e}/>
      this.nextEntryKey++
      return output
    })

    return (
      <div>
        <h2>Education</h2>
        <ul>
          {entriesRendered}
        </ul>
      </div>
    )
  }
}

class EducationEntry extends Component {
  render() {
    const {entry} = this.props

    return (
      <li>
        <p>{entry.school || "(School name}"}, {entry.title || "(Degree title)"}</p>
        <p>{entry.start ? dateToMonth(entry.start) : "(Start date)"} - {entry.end ? dateToMonth(entry.end) : "(End date)"}</p>
      </li>
    )
  }
}

export default Education
