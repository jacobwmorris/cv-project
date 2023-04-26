import {Component} from "react"
import dateToMonth from "../DateToMonth"

class Employment extends Component {
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
      const output = <EmploymentEntry key={this.nextEntryKey} entry={e}/>
      this.nextEntryKey++
      return output
    })

    return (
      <div>
        <h2 className="DisplayStyles-underline">Employment history</h2>
        <ul className="DisplayStyles-list">
          {entriesRendered}
        </ul>
      </div>
    )
  }
}

class EmploymentEntry extends Component {
  render() {
    const {entry} = this.props

    return (
      <li className="DisplayStyles-smallunderline">
        <p className="DisplayStyles-bold">{entry.company || "(Company name)"}, {entry.position || "(Position)"}</p>
        <p className="DisplayStyles-graytext">{
          entry.start ? dateToMonth(entry.start) : "(Start date)"} - {entry.end ? dateToMonth(entry.end) : "(End date)"
        }</p>
        <p>{entry.description || "(Job description here)"}</p>
      </li>
    )
  }
}

export default Employment
