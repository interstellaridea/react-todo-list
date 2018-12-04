import _ from "lodash";
import React, { Component } from "react";
import { TodoContext } from "../TodoContext";

class ShowTodos extends Component {
  //  need to resolve how two buttons get rendered after delete
  //  once fixed , i may not need to touch anything in Provider
  renderTodos = ({ todo_list }, removeTodo) => {
    return _.map(todo_list, (todo, key) => {
      return todo && key ? (
        <div key={key}>
          {todo.todo}
          <button data-key={key} onClick={removeTodo}>
            X
          </button>
        </div>
      ) : null;
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
