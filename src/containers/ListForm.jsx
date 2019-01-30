import React from "react";
import uuid from "uuid/v4";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addToDos({
      id: uuid(),
      title: this.state.title
    });
    this.setState({
      title: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state.title);
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
                name="title"
                value={this.state.title}
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
