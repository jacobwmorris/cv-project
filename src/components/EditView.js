import { Component } from "react"

class EditView extends Component {
  render() {
    const {switcher, content} = this.props
    return <div>
        <h1>Editing</h1>
        <button onClick={switcher}>Done</button>
    </div>
  }
}

export default EditView
