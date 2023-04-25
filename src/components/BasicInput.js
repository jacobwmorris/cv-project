import {Component} from "react"
import "../style/BasicInput.css"

class BasicInput extends Component {
  render() {
    const {labelText, name, type, defaultVal} = this.props

    return (
      <div className="BasicInput-container">
        <label>{labelText}
          <input type={type} name={name} defaultValue={defaultVal} className="BasicInput-input"/>
        </label>
      </div>
    )
  }
}

export default BasicInput
