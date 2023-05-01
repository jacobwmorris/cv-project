import dateToMonth from "../DateToMonth"

function Employment({entries}) {
  if (!entries || entries.length === 0) {
    return null
  }

  const entriesRendered = entries.map((e) => {
    return <EmploymentEntry key={e.id} entry={e}/>
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

function EmploymentEntry({entry}) {
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

export default Employment
