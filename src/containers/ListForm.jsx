import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addToDos(this.state);
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
