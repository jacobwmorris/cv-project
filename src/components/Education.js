import dateToMonth from "../DateToMonth"

function Education({entries}) {
  if (!entries || entries.length === 0) {
    return null
  }
  
  const entriesRendered = entries.map((e) => {
    return <EducationEntry key={e.id} entry={e}/>
  })

  return (
    <div>
      <h2 className="DisplayStyles-underline">Education</h2>
      <ul className="DisplayStyles-list">
        {entriesRendered}
      </ul>
    </div>
  )
}

function EducationEntry({entry}) {
  return (
    <li className="DisplayStyles-smallunderline">
      <p className="DisplayStyles-bold">{entry.school || "(School name)"}, {entry.title || "(Degree title)"}</p>
      <p className="DisplayStyles-graytext">{
        entry.start ? dateToMonth(entry.start) : "(Start date)"} - {entry.end ? dateToMonth(entry.end) : "(End date)"
      }</p>
    </li>
  )
}

export default Education
