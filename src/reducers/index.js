import { combineReducers } from 'redux';
import { reducer as formReducer }  from 'redux-form';

import todoReducer from './todo';

const rootReducer = combineReducers({
  form: formReducer,
  todo: todoReducer
});

export default rootReducer;