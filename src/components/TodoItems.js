import React, { Component } from 'react';
import PropTypes from 'prop-types'

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

TodoItems.propTypes = {
  todo: PropTypes.object.isRequired
}