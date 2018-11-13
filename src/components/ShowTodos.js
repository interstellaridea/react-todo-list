import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ShowTodos extends Component {

  renderTodos() {
    if(!this.props.todos) {
      return;
    }

    return this.props.todos.map((item, index) => {
      return (
        <li key={index}>
          {item.task} | {item.importance}
          <button data-key={index} onClick={this.onDeleteClick.bind(this)}>&times;</button>
        </li>
      );
    });
  }

  onDeleteClick(e) {
    // debugger;
    const id = e.target.getAttribute('data-key');
    console.log(`Yo the data-key is ${id}`)
    this.props.removeTask(id);
  }

  render() {
    return(
      <div>
        todos created:
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { todos: state.todo }
}

export default connect(mapStateToProps, actions)(ShowTodos);