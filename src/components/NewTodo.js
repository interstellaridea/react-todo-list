import React from 'react'
import { Formik, Form, Field } from 'formik';
import { TodoContext } from '../TodoContext';

export default () => 
  <TodoContext.Consumer>
    { ({addTodo}) => (
      <TodoContext.Consumer>
      { context => (
        <Formik
          initialValues={{ todo: "" }}
          onSubmit={(values, actions) => {
            
            addTodo(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="todo" type="text" placeholder="Name of Todo" />
              <button disabled={isSubmitting} type="submit">
                Add todo
              </button>
            </Form>
          )}
        </Formik>
      )}
    </TodoContext.Consumer>
    )}
  </TodoContext.Consumer>
