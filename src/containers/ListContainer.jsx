import React from "react";
import ListItem from "../components/ListItem";

class ListContainer extends React.Component {
  deteleItem = x => {
    this.props.handleDelete(x);
  };

  render() {
    let allToDos = this.props.toDos.map(toDo => {
      return (
        <li>
          <ListItem key={toDo.content} title={toDo.content} deteleItem={this.deteleItem} />
        </li>
      );
    });
    return <div>{allToDos}</div>;
  }
}

export default ListContainer;
