import {Component} from "react"

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
  constructor(props) {
    super(props)

    this.monthNames = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    }
  }

  formatDate(date) {
    const dateParts = date.split("-", 3)
    return `${this.monthNames[dateParts[1]]} ${dateParts[0]}`
  }

  render() {
    const {entry} = this.props

    return (
      <li>
        <p>{entry.school || "(School name}"}, {entry.title || "(Degree title)"}</p>
        <p>{entry.start ? this.formatDate(entry.start) : "(Start date)"} - {entry.end ? this.formatDate(entry.end) : "(End date)"}</p>
      </li>
    )
  }
}

export default Education
