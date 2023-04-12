import { Component } from 'react';
import EditView from './components/EditView';
import DisplayView from './components/DisplayView';
import './CVApp.css';

class CVApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: "edit",
      content: {}
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
    this.setState({
      view: "display",
      //content: newContent
    })
  }

  render() {
    if (this.state.view === "edit") {
      return <EditView content={this.state.content} switcher={this.doneEditing}/>
    }
    return <DisplayView content={this.state.content} switcher={this.startEditing}/>
  }
}

export default CVApp;
