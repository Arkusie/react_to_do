import React from "react";
import Button from "./Button";

class ListItem extends React.Component {
  deteleItem = () => {
    let x = "czy doszla zmienna? jezeli tak to gitarka";
    this.props.deteleItem(x);
  };

  render() {
    return (
      <>
        <Button text="Edit" />
        <Button deteleItem={this.deteleItem.bind(this)} text="X" />
        {this.props.title}
        <br />
      </>
    );
  }
}

export default ListItem;
