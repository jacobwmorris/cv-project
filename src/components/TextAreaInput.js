import {Component} from "react"
import "../style/TextAreaInput.css"

class TextAreaInput extends Component {
  render() {
    const {labelText, name, defaultVal} = this.props

    return (
      <div>
        <label>
          <div>{labelText}</div>
          <textarea name={name} defaultValue={defaultVal} rows="4" className="TextAreaInput-textarea"></textarea>
        </label>
      </div>
    )
  }
}

export default TextAreaInput
