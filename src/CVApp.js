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
  }

  render() {
    if (this.state.view === "edit") {
      return <EditView content={this.state.content}/>
    }
    return <DisplayView content={this.state.content}/>
  }
}

export default CVApp;
