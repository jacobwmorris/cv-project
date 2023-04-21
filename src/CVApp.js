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
    this.addEducationEntry = this.addEducationEntry.bind(this)
    this.removeEducationEntry = this.removeEducationEntry.bind(this)
  }

  startEditing(event) {
    this.setState({
      view: "edit"
    })
  }

  doneEditing(event) {    
    const data = new FormData(event.target)
    const newGeneral = this.readGeneralContent(data)

    this.setState({
      view: "display",
      general: newGeneral
    })
  }

  addEducationEntry(index) {
    const newList = this.state.education.slice()
    const newEntry = {school: "", title: "", start: new Date(), end: new Date()}
    newList.splice(index, 0, newEntry)

    this.setState({
      education: newList
    })
  }

  removeEducationEntry(index) {
    const newList = this.state.education.slice()
    newList.splice(index, 1)

    this.setState({
      education: newList
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
      return (
        <EditView
        generalContent={this.state.general}
        educationContent={this.state.education}
        switcher={this.doneEditing}
        entryFuncs={{
          addEducation: this.addEducationEntry,
          removeEducation: this.removeEducationEntry
        }}/>
      )
    }
    return <DisplayView generalContent={this.state.general} switcher={this.startEditing}/>
  }
}

export default CVApp;
