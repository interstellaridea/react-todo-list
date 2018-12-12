import _ from "lodash";
import React, { Component } from "react";
import { RIEInput } from 'riek2';
import { TodoContext } from "../TodoContext";

class ShowTodos extends Component {

  update = e => {
    debugger
    console.log(e);
  }

  renderTodos = ({ todo_list }, removeTodo, updateTodo) => {

    // thinking of making another component Todo.js
    // that way i can have several components that have state of their timestamp 
    // each Todo has a a update method on it but the ShowTodo component renders forEach todo 

    /*
      sample idea:

      todo_list.map(id => {
        return (
          <React.Fragment>
            <Todo {...props} />  RETURNS A RIEInput component using change= context.updateTodo()
            <button onClick={ id => this.removeTodo(id) }> X </button>
          </React.Fragment>
        )}
      );
    */

    console.log(JSON.stringify(todo_list, null, 2));
    if (_.isEmpty(todo_list)) {
      return (
        <h2>Hey! <br /> Add some Todos to get shit done</h2>
      )
    }

    return Object.keys(todo_list).map( id => {
      return (
        <div key={id} >
          <RIEInput
            change={ updateTodo }
            value={todo_list[id].todo}
            propName='todo'
            defaultProps={todo_list[id]}
          />
          <button data-key={id} onClick={id => removeTodo(id)} >X</button>
        </div>
        
      )
    });
  };

  render() {
    return (
      <TodoContext.Consumer>
        {({todos, todos: todo_list, removeTodo, updateTodo}) =>
          todo_list ? (
            <React.Fragment>
              <p>show todos:</p>
              {this.renderTodos(todos, removeTodo, updateTodo)}
            </React.Fragment>
          ) : null
        }
      </TodoContext.Consumer>
    );
  }
}

export default ShowTodos;
