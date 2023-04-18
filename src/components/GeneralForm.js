import { Component } from "react";

class GeneralForm extends Component {
  render() {
    const content = this.props.content

    return <>
      <input type="text"/>
      <input type="email"/>
      <input type="tel"/>
    </>
  }
}

export default GeneralForm
