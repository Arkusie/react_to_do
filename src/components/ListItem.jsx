import React from "react";
import Button from "./Button";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      title: props.toDo.title
    };
  }
  // conntent changed to title
  deteleItem = () => {
    this.props.deteleItem(this.props.toDo.id);
  };

  editItem = () => {
  
    this.setState({
      isEdited: true
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDecline = () => {
    this.setState({
      isEdited: false,
      title: this.props.toDo.title
    });
  };
  handleAccept = () => {
    this.props.editItem(this.props.toDo.id, this.state.title);
    this.setState({
      isEdited: false
    });
  };

  render() {
    return (
      <>
        <Button onClick={this.deteleItem.bind(this)} text="X" />
        {!this.state.isEdited ? (
          <>
            <Button text="Edit" onClick={this.editItem} /> {this.props.toDo.title}
          </>
        ) : (
          <>
            <input
              className="edit_input"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Button text="accept" onClick={this.handleAccept} />
            <Button text="decline" onClick={this.handleDecline} />
          </>
        )}

        <br />
      </>
    );
  }
}

export default ListItem;
