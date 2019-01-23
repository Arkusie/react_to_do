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
          <div className="label_elements">
            <label>
              <input
                placeholder="what is there to do?"
                id="content_input"
                onChange={this.handleChange.bind(this)}
                name="content"
                value={this.state.content}
              />
            </label>
            <br />
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default ListForm;
