import React, { Component } from "react";
import uuid from "uuid";
import Projects from "./containers/Projects";
import AddProject from "./containers/AddProject";
// import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Wake up",
          category: "1"
        },
        {
          id: uuid.v4(),
          title: "eat breakfast",
          category: "2"
        },
        {
          id: uuid.v4(),
          title: "do nothing",
          category: "3"
        }
      ]
    });
  }
  //updating the state with submitted content
  handleAddProject(newToDo) {
    let projects = this.state.projects;
    projects.push(newToDo);
    this.setState({ projects: projects });
  }

  //get id from state, remove the project and reset the state
  handleDeleteProject(id) {
    let projects = this.state.projects;
    //find the id, match to the current id, put it in the index
    let index = projects.findIndex(x => x.id === id);
    //
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  //passing states into Projects as a prop
  render() {
    return (
      <>
        <div className="App">React ToDo List</div>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </>
    );
  }
}

export default App;
