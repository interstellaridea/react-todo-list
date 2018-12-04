import _ from "lodash";
import React, { Component } from "react";
import { TodoContext } from "../TodoContext";

class ShowTodos extends Component {

  renderTodos = ({ todo_list }, removeTodo) => {
    if (_.isEmpty(todo_list)) {
      return (
        <h2>Hey! <br /> Add some Todos to get shit done</h2>
      )
    }

    return Object.keys(todo_list).map( id => {
      return (<div key={id}>
        {todo_list[id].todo}
        <button data-key={id} onClick={id => removeTodo(id)} >X</button>
      </div>)
    });
  };

  render() {
    return (
      <TodoContext.Consumer>
        {context =>
          context.todos.todo_list ? (
            <React.Fragment>
              <p>show todos:</p>
              {this.renderTodos(context.todos, context.removeTodo)}
            </React.Fragment>
          ) : null
        }
      </TodoContext.Consumer>
    );
  }
}

export default ShowTodos;
