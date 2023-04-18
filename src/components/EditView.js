import { Component } from "react"
import GeneralForm from "./GeneralForm"

class EditView extends Component {
  render() {
    const {switcher, content} = this.props
    
    return <div>
      <h1>Editing</h1>
        <form onSubmit={switcher}>
          <GeneralForm content={content.general}/>
          <button>Done</button>
        </form>
    </div>
  }
}

export default EditView
