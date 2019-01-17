import React from "react";
import ListContainer from "./ListContainer";
import ListForm from "./ListForm";
import toDoData from "../Data/ToDosData";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: toDoData
    };
  }

  // componentWillMount() {
  //   this.setState({
  //     toDos: toDoData
  //   });
  // }

  handleDelete = id => {
    let toDos = this.state.toDos;
    let filteredEl = toDos.filter(el => el.id !== id);

    this.setState({
      toDos: filteredEl
    });
  };

  handleAddTodos(newToDos) {
    let addNewToDos = this.state.toDos;
    addNewToDos.push(newToDos);
    // console.log(this.state.toDos);
    this.setState({ toDos: this.state.toDos });
  }

  handleEdit = (id, newContent) => {
    let acceptEl = this.state.toDos.map(el => {
      if (el.id === id) {
        return { id, content: newContent };
      } else {
        return el;
      }
    });
    this.setState({
      toDos: acceptEl
    });
  };
  render() {
    return (
      <div className="main-holder">
        <ListForm addToDos={this.handleAddTodos.bind(this)} />
        <ul>
          <ListContainer
            toDos={this.state.toDos}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        </ul>
      </div>
    );
  }
}

export default Todo;
