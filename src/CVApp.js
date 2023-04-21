import { Component } from 'react';
import EditView from './components/EditView';
import DisplayView from './components/DisplayView';
import './CVApp.css';

class CVApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: "edit",
      general: {}, //Will contain name, email, phone, and summary
      education: [], //Will contain a list of school, title, start, and end
      employment: []
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
    /* const newContent = {
      general: {},
      education: [],
      employment: []
    } */
    
    const data = new FormData(event.target)
    const newGeneral = this.readGeneralContent(data)

    this.setState({
      view: "display",
      general: newGeneral
    })
  }

  readGeneralContent(data) {
    const general = {}
    general.name = data.get("name")
    general.email = data.get("email")
    general.phone = data.get("phone")
    general.summary = data.get("summary")
    return general
  }

  render() {
    if (this.state.view === "edit") {
      return <EditView generalContent={this.state.general} switcher={this.doneEditing}/>
    }
    return <DisplayView generalContent={this.state.general} switcher={this.startEditing}/>
  }
}

export default CVApp;
