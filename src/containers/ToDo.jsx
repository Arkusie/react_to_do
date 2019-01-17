import React from "react";
import ListContainer from "./ListContainer";
import ListForm from "./ListForm";
import toDoData from "../Data/ToDosData";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: []
    };
  }

  componentWillMount() {
    this.setState({
      toDos: toDoData
    });
  }

  handleDelete = x => {
    console.log("jestem w top componencie, czas usunac");
    console.log(x);
  };

  handleAddTodos(newToDos) {
    console.log(newToDos);

    let addNewToDos = this.state.toDos;
    addNewToDos.push(newToDos);
    // console.log(this.state.toDos);
    this.setState({ toDos: this.state.toDos });
  }
  render() {
    return (
      <div className="main-holder">
        <ListForm addToDos={this.handleAddTodos.bind(this)} />
        <ul>
          <ListContainer toDos={this.state.toDos} handleDelete={this.handleDelete} />
        </ul>
      </div>
    );
  }
}

export default Todo;
