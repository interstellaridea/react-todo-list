import { SAVE_TODO } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_TODO:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}