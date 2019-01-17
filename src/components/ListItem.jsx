import React from "react";
import Button from "./Button";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      content: props.toDo.content
    };
  }

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
      content: this.props.toDo.content
    });
  };
  handleAccept = () => {
    this.props.editItem(this.props.toDo.id, this.state.content);
    this.setState({
      isEdited: false
    });
  };

  render() {
    return (
      <>
        {!this.state.isEdited ? (
          <>
            <Button text="Edit" onClick={this.editItem} /> {this.props.toDo.content}
          </>
        ) : (
          <>
            <input name="content" value={this.state.content} onChange={this.handleChange} />
            <Button text="accept" onClick={this.handleAccept} />
            <Button text="decline" onClick={this.handleDecline} />
          </>
        )}

        <Button onClick={this.deteleItem.bind(this)} text="X" />
        <br />
      </>
    );
  }
}

export default ListItem;
