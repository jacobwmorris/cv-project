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
    //this.doneEditing = this.doneEditing.bind(this)
    this.addEducationEntry = this.addEducationEntry.bind(this)
    this.removeEducationEntry = this.removeEducationEntry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //Callbacks
  removeEducationEntry(index) {
    const newList = this.state.education.slice()
    newList.splice(index, 1)

    this.setState({
      education: newList
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const submitter = event.nativeEvent.submitter
    const controls = event.target.elements
    if (submitter.hasAttribute("data-btn-done")) {
      this.doneEditing(controls)
      return
    }
    if (submitter.hasAttribute("data-btn-addedu")) {
      this.addEducationEntry(controls)
      return
    }
  }

  startEditing(event) {
    this.setState({
      view: "edit"
    })
  }

  //Class methods
  doneEditing(formContent) {
    const newGeneral = this.readGeneralContent(formContent)
    this.setState({
      view: "display",
      general: newGeneral
    })
  }

  addEducationEntry(index) {
    
  }

  readGeneralContent(formContent) {
    const general = {}
    general.name = formContent.namedItem("name").value
    general.email = formContent.namedItem("email").value
    general.phone = formContent.namedItem("phone").value
    general.summary = formContent.namedItem("summary").value
    return general
  }

  readEducationContent(data) {
    const schools = data.getAll("ed_school")
    const titles = data.getAll("ed_title")
    const starts = data.getAll("ed_start")
    const ends = data.getAll("ed_end")
    return schools.map((s, i) => {return {school: s, title: titles[i], start: starts[i], end: ends[i]}})
  }

  render() {
    if (this.state.view === "edit") {
      return (
        <EditView
        generalContent={this.state.general}
        educationContent={this.state.education}
        handleSubmit={this.handleSubmit}
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
