import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todos from './Todos';

export class TodoItem extends Component {
  getStyle = () => {
      return { 
        background: '#f3f3f3',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ?
        'line-through': 'none'
      }
    } 
  
   
  render() {
    return (
    <div style={this.getStyle()}>
      <p>{ this.props.todo.title }</p>
    </div>
  )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem