import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowTodos extends Component {
  renderTodos() {
    if(!this.props.todos) {
      return;
    }

    return this.props.todos.map((item, index) => {
      return <li key={index}>{item.task}</li>
    });

  }

  render() {
    return(
      <div>
      todos created:
      {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { todos: state.todo }
}

export default connect(mapStateToProps)(ShowTodos);