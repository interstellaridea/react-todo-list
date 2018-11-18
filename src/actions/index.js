import _ from 'lodash';
import timestamp from 'time-stamp';
import { SAVE_TODO, UPDATE_TODO, REMOVE_TODO } from './types';


export function saveTodo(todo) { 
  const payload = {...todo, created_at: timestamp.utc('YYYYMMDDHHmmssms')};
  return { type: SAVE_TODO, payload };
}

export function updateTodo(task) {
  // creates payload with components default props and new input edit
  // create a #updated_at prop, remove #index prop
  const payload = {..._.omit(this.defaultProps, 'index'), ...task, updated_at: timestamp.utc('YYYYMMDDHHmmssms')};
  return { type: UPDATE_TODO, payload };
}

export function removeTask(id) {
  return { type: REMOVE_TODO, payload: id}
}