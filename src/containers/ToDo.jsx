import React from "react";
import ListContainer from "./ListContainer";
import ListForm from "./ListForm";
import toDoData from "../Data/ToDosData";
import axios from "axios";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: toDoData
    };
  }

  componentDidMount() {
    axios
      .get("http://195.181.210.249:3000/todo/")
      .then(response => response.data)

      .then(data => {
        this.setState({
          toDos: data
        });
      });
  }

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
    axios.post("http://195.181.210.249:3000/todo/", {
      title: newToDos.title,
      author: "Areg"
    });
    this.setState({ toDos: this.state.toDos });
  }

  handleEdit = (id, newContent) => {
    let acceptEl = this.state.toDos.map(el => {
      if (el.id === id) {
        return { id, title: newContent };
      } else {
        return el;
      }
    });
    axios.patch("http://195.181.210.249:3000/todo/" + id, {
      title: newContent
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
