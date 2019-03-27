import React from "react";

export default class ToDoList extends React.Component {
  render() {
    const deleteThisItem = this.props.deleteItem;
    const toDoStatus = this.props.toDoStatus;
    const ToDoList = this.props.info.map((item, id) => (
      <li item={item.id} key={id}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toDoStatus(item.id)}
        />
        <span > {item.title} </span>
        <button onClick={() => deleteThisItem(item.id)}> X </button>
      </li>
    ));

    if (ToDoList.length === 0) {
      return <p>No more task !</p>;
    }

    return <div>{ToDoList}</div>;
  }
}
