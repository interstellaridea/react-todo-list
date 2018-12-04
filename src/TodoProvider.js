import _ from "lodash";
import React, { Component } from "react";
import timeStamp from "time-stamp";
import { TodoContext } from "./TodoContext";

export default class TodoProvider extends Component {
  /* TODO_LIST
  is a obj with timestamp as a ID, for filtering, created_at is same val
        201812034213: {
        todo: "tester",
        created_at: "201812034213"
      }
  */

  state = {
    todo_list: {
      201812034213: {
        todo: "tester",
        created_at: "201812034213"
      }
    },
    msg: "activated"
  };

  addTodo = todo => {
    // time stamp todo before saving to context
    let stamp = timeStamp.utc("YYYYMMDDmmss");
    todo = { ...todo, created_at: stamp };

    this.setState({
      todo_list: { ...this.state.todo_list, [stamp]: todo }
    });
    // set state to cache for user
    localStorage.setItem("CacheTask", JSON.stringify(this.state));
  };

  removeTodo = e => {

     // elemont 
    console.log(e.target.getAttribute("data-key"));
    const id = e.target.getAttribute("data-key");
    console.log(e.target.parentNode);
    this.setState({
      todo_list: _.omit(this.state, id)
    });
  };

  render() {
    console.log(`Provider: ${JSON.stringify(this.state, null, 2)}`);
    return (
      <TodoContext.Provider
        value={{
          todos: this.state,
          addTodo: this.addTodo,
          removeTodo: this.removeTodo
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
