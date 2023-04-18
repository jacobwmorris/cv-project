import {Component} from "react"

class General extends Component {
  render() {
    const content = this.props.content

    return (
      <>
        <h1>{content.name || "(Your name here)"}</h1>
        <div>
          <div>Email: {content.email || "(Your email here)"}</div>
          <div>|</div>
          <div>Phone number: {content.phone || "(Your phone number here)"}</div>
        </div>
        <h2>Professional summary</h2>
        <p>{content.summary}</p>
      </>
    )
  }
}

export default General
