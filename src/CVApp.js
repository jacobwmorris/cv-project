import { Component, useState, useRef } from 'react'
import EditView from './components/EditView'
import DisplayView from './components/DisplayView'

function CVApp() {
  const [view, setView] = useState("edit")
  const [general, setGeneral] = useState({})
  const [education, setEducation] = useState([])
  const [employment, setEmployment] = useState([])
  const nextEducationId = useRef(0)
  const nextEmploymentId = useRef(0)

  //Callbacks
  function handleSubmit(event) {
    event.preventDefault()
    const submitter = event.nativeEvent.submitter
    const data = new FormData(event.target)
    if (submitter.hasAttribute("data-btn-done")) {
      doneEditing(data, setGeneral, education, setEducation, employment, setEmployment)
      setView("display")
      return
    }
    if (submitter.hasAttribute("data-btn-addedu")) {
      addEducationEntry(data, submitter.getAttribute("data-index"), nextEducationId.current, education, setEducation)
      nextEducationId.current++
      return
    }
    if (submitter.hasAttribute("data-btn-rmedu")) {
      removeEducationEntry(data, submitter.getAttribute("data-index"), education, setEducation)
      return
    }
    if (submitter.hasAttribute("data-btn-addemp")) {
      addEmploymentEntry(data, submitter.getAttribute("data-index"), nextEmploymentId.current, employment, setEmployment)
      nextEmploymentId.current++
      return
    }
    if (submitter.hasAttribute("data-btn-rmemp")) {
      removeEmploymentEntry(data, submitter.getAttribute("data-index"), employment, setEmployment)
      return
    }
  }

  function handleEdit(event) {
    setView("edit")
  }

  //Rendering
  if (view === "edit") {
    return (
      <EditView
      generalContent={general}
      educationContent={education}
      employmentContent={employment}
      handleSubmit={handleSubmit}/>
    )
  }
  return (
    <DisplayView
    generalContent={general}
    educationContent={education}
    employmentContent={employment}
    handleEdit={handleEdit}/>
  )
}

//Helper functions
function doneEditing(data, setGeneral, education, setEducation, employment, setEmployment) {
  const newGeneral = readGeneralContent(data)
  const newEducation = readEducationContent(data, education)
  const newEmployment = readEmploymentContent(data, employment)
  setGeneral(newGeneral)
  setEducation(newEducation)
  setEmployment(newEmployment)
}

function addEducationEntry(data, index, entryId, education, setEducation) {
  const newEducation = readEducationContent(data, education)
  newEducation.splice(index, 0, {id: entryId, school: "", title: "", start: "", end: ""})
  setEducation(newEducation)
}

function removeEducationEntry(data, index, education, setEducation) {
  const newEducation = readEducationContent(data, education)
  newEducation.splice(index, 1)
  setEducation(newEducation)
}

function addEmploymentEntry(data, index, entryId, employment, setEmployment) {
  const newEmployment = readEmploymentContent(data, employment)
  newEmployment.splice(index, 0, {id: entryId, company: "", position: "", description: "", start: "", end: ""})
  setEmployment(newEmployment)
}

function removeEmploymentEntry(data, index, employment, setEmployment) {
  const newEmployment = readEmploymentContent(data, employment)
  newEmployment.splice(index, 1)
  setEmployment(newEmployment)
}

//Form data functions
function readGeneralContent(data) {
  const general = {}
  general.name = data.get("name")
  general.email = data.get("email")
  general.phone = data.get("phone")
  general.summary = data.get("summary")
  return general
}

function readEducationContent(data, education) {
  const ids = education.map((e) => e.id)
  const schools = data.getAll("ed_school")
  const titles = data.getAll("ed_title")
  const starts = data.getAll("ed_start")
  const ends = data.getAll("ed_end")
  return ids.map((id, i) => {
    return {id, school: schools[i], title: titles[i], start: starts[i], end: ends[i]}
  })
}

function readEmploymentContent(data, employment) {
  const ids = employment.map((e) => e.id)
  const companies = data.getAll("em_company")
  const positions = data.getAll("em_position")
  const descriptions = data.getAll("em_description")
  const starts = data.getAll("em_start")
  const ends = data.getAll("em_end")
  return ids.map((id, i) => {
    return {id, company: companies[i], position: positions[i], description: descriptions[i], start: starts[i], end: ends[i]}
  })
}

class CVAppClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: "edit",
      general: {}, //Will contain name, email, phone, and summary
      education: [], //Will contain a list of school, title, start, and end
      employment: [] //Will contain a list of company, position, description, start, and end
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
    if (submitter.hasAttribute("data-btn-addemp")) {
      this.addEmploymentEntry(data, submitter.getAttribute("data-index"))
      return
    }
    if (submitter.hasAttribute("data-btn-rmemp")) {
      this.removeEmploymentEntry(data, submitter.getAttribute("data-index"))
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
    const newEmployment = this.readEmploymentContent(data)
    this.setState({
      view: "display",
      general: newGeneral,
      education: newEducation,
      employment: newEmployment
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

  addEmploymentEntry(data, index) {
    const newEmployment = this.readEmploymentContent(data)
    newEmployment.splice(index, 0, {company: "", position: "", description: "", start: "", end: ""})
    this.setState({
      employment: newEmployment
    })
  }

  removeEmploymentEntry(data, index) {
    const newEmployment = this.readEmploymentContent(data)
    newEmployment.splice(index, 1)
    this.setState({
      employment: newEmployment
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
    return schools.map((s, i) => {
      return {school: s, title: titles[i], start: starts[i], end: ends[i]}
    })
  }

  readEmploymentContent(data) {
    const companies = data.getAll("em_company")
    const positions = data.getAll("em_position")
    const descriptions = data.getAll("em_description")
    const starts = data.getAll("em_start")
    const ends = data.getAll("em_end")
    return companies.map((c, i) => {
      return {company: c, position: positions[i], description: descriptions[i], start: starts[i], end: ends[i]}
    })
  }

  render() {
    if (this.state.view === "edit") {
      return (
        <EditView
        generalContent={this.state.general}
        educationContent={this.state.education}
        employmentContent={this.state.employment}
        handleSubmit={this.handleSubmit}/>
      )
    }
    return (
      <DisplayView
      generalContent={this.state.general}
      educationContent={this.state.education}
      employmentContent={this.state.employment}
      handleEdit={this.handleEdit}/>
    )
  }
}

export default CVApp;
