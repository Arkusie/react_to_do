import React, { Component } from "react";
import ProjectItem from "../components/ProjectItem";

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    //getting props from App.js, maping into projectItem
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />;
      });
    }
    console.log(this.props);

    return (
      <>
        <h3>do it!</h3>
        {projectItems}
      </>
    );
  }
}

export default Projects;
