import timestamp from 'time-stamp';
import { SAVE_TODO, REMOVE_TASK } from './types';


export function saveTodo(todo) { 
  const payload = {...todo, created_at: timestamp.utc('YYYYMMDDHHmmssms')};
  return { type: SAVE_TODO, payload };
}

export function removeTask(id) {
  return { type: REMOVE_TASK, payload: id}
}