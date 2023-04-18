import {Component} from "react"

class TextAreaInput extends Component {
  render() {
    const {labelText, name, defaultVal} = this.props

    return (
      <div>
        <label>
          <div>{labelText}</div>
          <textarea name={name} defaultValue={defaultVal} rows="4" cols="80"></textarea>
        </label>
      </div>
    )
  }
}

export default TextAreaInput
