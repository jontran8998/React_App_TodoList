import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TodoItems extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      background: '#f4f4f4'
    }
  }

  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>Delete</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItems.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
