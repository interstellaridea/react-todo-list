import React, { Component } from 'react';
import TodoForm from './todoForm';

export default class App extends Component {

  handleSubmit(values) {
    console.log(`todoForm: ${values}`);
  }

  render() {
    return(
      <div>
        <h2>Todo List</h2>
        <TodoForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}