import React, { Component } from 'react';

import PostNewTodo from './PostNewTodo';
import ShowTodos from './ShowTodos';
class App extends Component {

  render() {
    return(
      <div>
        <h2>Todo List</h2>
        <PostNewTodo />
        <ShowTodos />
      </div>
    );
  }
};

export default App;