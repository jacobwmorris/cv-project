import { Component } from "react";
import BasicInput from "./BasicInput"
import TextAreaInput from "./TextAreaInput"
import "../style/FormStyles.css"

class GeneralForm extends Component {
  render() {
    const content = this.props.content

    return (
      <div className="FormStyles-entry">
        <BasicInput labelText="Name: " type="text" name="name" defaultVal={content.name}/>
        <BasicInput labelText="Email: " type="email" name="email" defaultVal={content.email}/>
        <BasicInput labelText="Phone number: " type="tel" name="phone" defaultVal={content.phone}/>
        <TextAreaInput labelText="Summary:" name="summary" defaultVal={content.summary}/>
      </div>
    )
  }
}

export default GeneralForm
