import BasicInput from "./BasicInput"
import TextAreaInput from "./TextAreaInput"
import "../style/FormStyles.css"

function EmploymentForm({entries}) {
  if (!entries || entries.length === 0) {
    return (
      <div>
        <button data-btn-addemp data-index="0" className="FormStyles-greenbtn">+ Add</button>
      </div>
    )
  }

  const entriesRendered = entries.map((e, i) => {
    return <EmploymentFormEntry /* key={this.nextEntryKey} */ entry={e} index={i}/>
  })

  return (
    <div>
      {entriesRendered}
    </div>
  )
}

function EmploymentFormEntry({entry, index}) {
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

export default EmploymentForm
