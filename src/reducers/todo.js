import _ from 'lodash';
import { SAVE_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_TODO:
      return [ ...state, action.payload ];
    
    case UPDATE_TODO:
      // return new state by finding with index
      const cleaned = _.omit(action.payload, 'index'); // because im using .defaultProps with riek i have index
      const filteredState = state.filter( todo => todo.created_at !== action.payload.created_at); //return all but the matching entry 
      
      return [ ...filteredState, cleaned];;

    case REMOVE_TODO:
      // action.payload is .created_at value
      return _.reject(state, todo => todo.created_at === action.payload)

    default:
      return state;
  }
}