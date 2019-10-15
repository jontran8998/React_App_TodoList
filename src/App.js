import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

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
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with colleague',
        completed: false
      }
    ]
  }
  //toogle todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  //delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (

      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
