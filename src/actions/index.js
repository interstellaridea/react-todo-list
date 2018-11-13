import { SAVE_TODO } from './types';

export function saveTodo(todo) {
  
  return { type: SAVE_TODO, payload: todo };
}