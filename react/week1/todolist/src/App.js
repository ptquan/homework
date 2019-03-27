import React from 'react';
import TodoItem from './TodoItem';
import logo from './logo.svg';
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        this.todoItems = [
            {title: 'Go to bedd', isComplete: true, id: this.id},
            {title: 'Eat eat eat'},
            {title: 'Brush teethhh'},

        ]
        
    }
    render() {
        return (
            <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://"
            target="_blank"
            rel="noopener noreferrer"
          >
          <h1>To do list</h1>

          {this.todoItems.map((item, index) => <TodoItem key={index} title={item.title} /> )}
          </a>
          
        </header>
      </div>
        );
    }
}

export default App;