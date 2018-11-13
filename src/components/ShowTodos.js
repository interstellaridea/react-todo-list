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
          {item.task} | {item.importance} |  {item.created_at}
          <button data-key={item.created_at} onClick={this.onDeleteClick.bind(this)}>&times;</button>
        </li>
      );
    });
  }

  onDeleteClick(e) {
    const timeID = e.target.getAttribute('data-key');
    this.props.removeTask(timeID);
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