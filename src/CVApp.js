import { Component } from 'react';
import EditView from './components/EditView';
import DisplayView from './components/DisplayView';
import './CVApp.css';

class CVApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: "edit",
      content: {
        general: {}, //Will contain name, email, phone, and summary
        education: [], //Will contain a list of school, title, start, end
        employment: []
      }
    }

    this.startEditing = this.startEditing.bind(this)
    this.doneEditing = this.doneEditing.bind(this)
  }

  startEditing(event) {
    this.setState({
      view: "edit"
    })
  }

  doneEditing(event) {
    //Collect content from the edit mode forms here
    const newContent = {
      general: {},
      education: [],
      employment: []
    }
    
    const data = new FormData(event.target)
    newContent.general = this.readContentGeneral(data)

    this.setState({
      view: "display",
      content: newContent
    })
  }

  readContentGeneral(data) {
    const general = {}
    general.name = data.get("name")
    general.email = data.get("email")
    general.phone = data.get("phone")
    general.summary = data.get("summary")
    return general
  }

  render() {
    if (this.state.view === "edit") {
      return <EditView content={this.state.content} switcher={this.doneEditing}/>
    }
    return <DisplayView content={this.state.content} switcher={this.startEditing}/>
  }
}

export default CVApp;
