import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TodoForm = ({handleSubmit, pristine, submitting}) => {
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="todo-item"
          component="input"
          type="text"
          placeholder="Enter a todo..."
        />
      </div>
      <button type="submit" disabled={pristine || submitting}>
        Add Todo
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'todo'
})(TodoForm);