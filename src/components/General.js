
function General({content}) {
  return (
    <div>
      <h1 className="DisplayStyles-name">{content.name || "(Your name here)"}</h1>
      <div className="DisplayStyles-info-flexbox DisplayStyles-graytext DisplayStyles-underline">
        <div>Email: {content.email || "(Your email here)"}</div>
        <div>|</div>
        <div>Phone number: {content.phone || "(Your phone number here)"}</div>
      </div>
      <h2>Professional summary</h2>
      <p>{content.summary}</p>
    </div>
  )
}

export default General
