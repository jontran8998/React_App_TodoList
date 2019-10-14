import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

export class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'dinner with girlfriends',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with colleague',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
