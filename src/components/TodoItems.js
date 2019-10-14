import React, { Component } from 'react';

export default class TodoItems extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}
