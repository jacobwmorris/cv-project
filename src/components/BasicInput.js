import {Component} from "react"

class BasicInput extends Component {
  render() {
    const {labelText, name, type, defaultVal, changer} = this.props

    return (
      <div>
        <label>{labelText}
          <input onChange={changer} type={type} name={name} defaultValue={defaultVal}/>
        </label>
      </div>
    )
  }
}

export default BasicInput
