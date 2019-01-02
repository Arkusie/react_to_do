import React, { Component } from "react";
import uuid from "uuid";
class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }
  static defaultProps = {
    categories: ["common", "important", " uber important"]
  };

  handleSubmit(e) {
    if (this.refs.title.value === "") {
      alert("title is required");
    } else {
      this.setState(
        {
          newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        //passing the submit to the App component
        function() {
          console.log(this.state);
          this.props.addProject(this.state.newProject);
        }
      );
    }
    console.log(this.refs.title.value);
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <>
        <h3>Add new ToDos</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>What is there to do? </label>
            <input type="text" ref="title" />
          </div>

          <div>
            <label>level of importance </label>
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default AddProject;
