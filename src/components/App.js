import React, { Component } from 'react';

import TodoProvider from '../TodoProvider';
import ShowTodos from './ShowTodos';
import NewTodo from './NewTodo';

class App extends Component {

  render() {
    return(
      <div>
        <TodoProvider>
          <NewTodo />
          <ShowTodos />
        </TodoProvider>
      </div>
    );
  }
};

export default App;