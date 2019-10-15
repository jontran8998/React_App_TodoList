import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
import About from './components/pages/About'

export class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => { this.setState({ todos: res.data }) })
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
      id: uuid.v4(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (

      <div className="App">
        <div className="container">
          <Router>
            <Header />
            <Route exact path="/">
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </Route>
            <Route path="/about" component={About} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
