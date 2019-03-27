import React from "react";
import List from "./TodoList";

export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [{ title: "React", done: false, id: 0 }],
      inputText: ""
    };
  }

  componentDidMount() {}

  addToDo = () => {
    const { List, inputText } = this.state;
    const newTask = List.concat({ title: inputText});
    this.setState({ List: newTask, inputText:"" });
  };

  todoTextHandler = e => {
    const typedText = e.target.value;
    this.setState({ inputText: typedText });
  };

  deleteTodo = id => {
    const newTask = this.state.List.filter(toDo => toDo.id !==id );
    this.setState({ List: newTask });
  };

  completedToDo = id => {
    const index = this.state.List.findIndex(toDo => toDo.id === id);
    const toDo = this.state.List[index];
    toDo.done = !toDo.done;
    this.setState({ List: this.state.List });
  };

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <h6>To Do List</h6>
          <input
            placeholder="Add new to do....."
            value={this.inputText}
            onChange={this.todoTextHandler}
          />
          <button onClick={this.addToDo}>Add</button>
          <List
            info={this.state.List}
            deleteItem={this.deleteTodo}
            toDoStatus={this.completedToDo}
          />
        </div>
      </React.Fragment>
    );
  }
}
