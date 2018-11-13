import _ from 'lodash';
import { SAVE_TODO, REMOVE_TASK } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_TODO:
      return [ ...state, action.payload ];

    case REMOVE_TASK:
      return _.reject(state, state[action.payload]);

    default:
      return state;
  }
}