import _ from 'lodash';
import { SAVE_TODO, REMOVE_TODO } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_TODO:
      return [ ...state, action.payload ];

    case REMOVE_TODO:
      // action.payload is .created_at value
      return _.reject(state, todo => todo.created_at === action.payload)

    default:
      return state;
  }
}