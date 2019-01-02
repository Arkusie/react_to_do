import React, { Component } from "react";

class ProjectItem extends Component {
  deleteProject(id) {
    // it sould be executed in the main component(App),
    //so it needs to be passed +2 up(into Projects and then into App)
    console.log("delete test");
    this.props.onDelete(id);
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>
          {" "}
          X
        </a>
        {this.props.project.title} - {this.props.project.category}{" "}
      </li>
    );
  }
}

export default ProjectItem;
