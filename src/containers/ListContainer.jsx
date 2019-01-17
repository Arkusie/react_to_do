import React from "react";
import ListItem from "../components/ListItem";

class ListContainer extends React.Component {
  render() {
    let allToDos = this.props.toDos.map(toDo => {
      return (
        <li key={toDo.id}>
          <ListItem toDo={toDo} deteleItem={this.props.handleDelete} editItem={this.props.handleEdit} />
        </li>
      );
    });
    return <div>{allToDos}</div>;
  }
}

export default ListContainer;
