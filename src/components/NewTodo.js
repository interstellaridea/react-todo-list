import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { TodoContext } from "../TodoContext";

class NewTodo extends Component {
  render() {
    return (
      <div>
        <TodoContext.Consumer>
          {context => (
            <Formik
              initialValues={{ todo: "" }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  context.addTodo(values);
                }, 1000);

                actions.setSubmitting(false);
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
      </div>
    );
  }
}
export default NewTodo;
