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
  constructor(props) {
    super(props);
    this.state = {
      todo_list: {
        201812034213: {
          todo: "tester",
          created_at: "201812034213"
        }
      },
      msg: "activated",
      addTodo: this.addTodo,
      updateTodo: this.updateTodo,
      removeTodo: this.removeTodo,
      sortTodos: this.sortTodos
    }

  }

  addTodo = todo => {
    // time stamp todo before saving to context
    let stamp = timeStamp.utc("YYYYMMDDmmss");
    todo = { ...todo, created_at: stamp };

    this.setState({
      todo_list: { ...this.state.todo_list, [stamp]: todo }
    },() => localStorage.setItem("CacheTask", JSON.stringify(this.state)) )
      // console.log('cached new todo');
  };

  removeTodo = id => {
    this.setState({
      todo_list: _.omit(this.state.todo_list, id)
    }, () => localStorage.setItem("CacheTask", JSON.stringify(this.state)) )
    // console.log('cached removals');
  };

  updateTodo = (key, updated_value) => {
    let stamp = timeStamp.utc("YYYYMMDDmmss");
    const update = { todo: updated_value, updated_at: stamp, created_at: key }
    this.setState({
      todo_list: {...this.state.todo_list, [key]: update }
    }, () => localStorage.setItem("CacheTask", JSON.stringify(this.state)) )
    // console.log('cached updates');
  }

  sortTodos = status => {
    const { todo_list } = this.state;
    if (!status) {
        this.setState({
          todo_list: Object.entries(todo_list).reverse().reduce((obj, [key, val]) => ({...obj, [key]: val}), {})
        }, () => localStorage.setItem("CacheTask", JSON.stringify(this.state)) )      
    } else {
        this.setState({
          todo_list: Object.entries(todo_list).sort().reduce((obj, [key, val]) => ({...obj, [key]: val}), {})
        }, () => localStorage.setItem("CacheTask", JSON.stringify(this.state)) )
    }
  };


  render() {
    // console.log(`Provider: ${JSON.stringify(this.state, null, 2)}`);/
    return (
      <TodoContext.Provider value={this.state}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
