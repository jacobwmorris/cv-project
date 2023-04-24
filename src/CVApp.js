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

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  //Callbacks
  handleSubmit(event) {
    event.preventDefault()
    const submitter = event.nativeEvent.submitter
    const data = new FormData(event.target)
    if (submitter.hasAttribute("data-btn-done")) {
      this.doneEditing(data)
      return
    }
    if (submitter.hasAttribute("data-btn-addedu")) {
      this.addEducationEntry(data, submitter.getAttribute("data-index"))
      return
    }
    if (submitter.hasAttribute("data-btn-rmedu")) {
      this.removeEducationEntry(data, submitter.getAttribute("data-index"))
      return
    }
  }

  handleEdit(event) {
    this.setState({
      view: "edit"
    })
  }

  //Class methods
  doneEditing(data) {
    const newGeneral = this.readGeneralContent(data)
    const newEducation = this.readEducationContent(data)
    this.setState({
      view: "display",
      general: newGeneral,
      education: newEducation
    })
  }

  addEducationEntry(data, index) {
    const newEducation = this.readEducationContent(data)
    newEducation.splice(index, 0, {school: "", title: "", start: "", end: ""})
    this.setState({
      education: newEducation
    })
  }

  removeEducationEntry(data, index) {
    const newEducation = this.readEducationContent(data)
    newEducation.splice(index, 1)
    this.setState({
      education: newEducation
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
        handleSubmit={this.handleSubmit}/>
      )
    }
    return (
      <DisplayView
      generalContent={this.state.general}
      educationContent={this.state.education}
      handleEdit={this.handleEdit}/>
    )
  }
}

export default CVApp;
