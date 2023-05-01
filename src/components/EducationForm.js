import BasicInput from "./BasicInput"
import "../style/FormStyles.css"

function EducationForm({entries}) {
  if (!entries || entries.length === 0) {
    return (
      <div>
        <button data-btn-addedu data-index="0" className="FormStyles-greenbtn">+ Add</button>
      </div>
    )
  }

  const entriesRendered = entries.map((e, i) => {
    return <EducationFormEntry /* key={this.nextEntryKey} */ entry={e} index={i}/>
  })

  return (
    <div>
      {entriesRendered}
    </div>
  )
}

function EducationFormEntry({entry, index}) {
  return (
    <div className="FormStyles-entry">
      <BasicInput labelText="School: " type="text" name="ed_school" defaultVal={entry.school}/>
      <BasicInput labelText="Title of study: " type="text" name="ed_title" defaultVal={entry.title}/>
      <BasicInput labelText="Start date: " type="date" name="ed_start" defaultVal={entry.start}/>
      <BasicInput labelText="End date: " type="date" name="ed_end" defaultVal={entry.end}/>
      <div>
        <button data-btn-addedu data-index={index + 1} className="FormStyles-greenbtn">+ Add</button>
        <button data-btn-rmedu data-index={index} className="FormStyles-redbtn">- Remove</button>
      </div>
    </div>
  )
}

export default EducationForm
