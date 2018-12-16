import React, { Component, Fragment } from "react";
import { RIEInput } from 'riek2';
import { TodoContext } from "../TodoContext";

class ShowTodos extends Component {

  handleUpdateChange = ({todo: updated_value }, key, updateTodo) => {
    updateTodo(key,updated_value);
  }

  render() {
    return (
      <TodoContext.Consumer>
        { ({todo_list, updateTodo, removeTodo}) => (
          <Fragment>
            {Object.keys(todo_list).map(key => (
              <div key={key}>
                <RIEInput
                  change={ e => this.handleUpdateChange(e, key, updateTodo)}
                  value={todo_list[key].todo}
                  propName='todo'
                />
                <button onClick={ () => removeTodo(key)}>&times;</button>
              </div>
              ))}
          </Fragment>
        )}
      </TodoContext.Consumer>
    )
  }
}

export default ShowTodos;