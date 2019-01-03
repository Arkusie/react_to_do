import React, { Component } from "react";

function ProjectItem(props) {
  return (
    <li>
      <a href="#" onClick={props.onDelete}>
        {" "}
        X
      </a>
      {props.project.title} - {props.project.category}{" "}
    </li>
  );
}

export default ProjectItem;
