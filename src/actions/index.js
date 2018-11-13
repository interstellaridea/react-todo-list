import { SAVE_TODO, REMOVE_TASK } from './types';

export function saveTodo(todo) { 
  return { type: SAVE_TODO, payload: todo };
}

export function removeTask(id) {
  return { type: REMOVE_TASK, payload: id}
}