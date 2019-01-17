import React from "react";
import uuid from "uuid/v4";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addToDos({
      id: uuid(),
      content: this.state.content
    });
    this.setState({
      content: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state.content);
  }

  render() {
    return (
      <div>
        <h3>add new todo</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            what to do?
            <input onChange={this.handleChange.bind(this)} name="content" value={this.state.content} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default ListForm;
