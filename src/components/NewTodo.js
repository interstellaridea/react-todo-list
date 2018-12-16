import React from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField, Button, withStyles } from '@material-ui/core';
import { TodoContext } from '../TodoContext';

const styles = theme => ({
  form: {
    color: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'baseline',
    display: 'flex',
    marginBottom: '25px'
  }
})
export default withStyles(styles)(({classes}) => 
  <TodoContext.Consumer>
    { ({addTodo}) => (
      <Formik
        initialValues={{ todo: "" }}
        onSubmit={(values, actions) => {
          addTodo(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ values, isSubmitting, handleChange }) => (
          <Form className={classes.form} >
            <Field name='todo' type='text' render={props => (
              <TextField
                {...props}
                value={values.todo}
                onChange={handleChange('todo', values)}
                label="Todo"
                margin="normal"
              />
            )}/>
            <Button type="submit" disabled={isSubmitting}>
              Add todo
            </Button>
          </Form>
        )}
      </Formik>
    )}
  </TodoContext.Consumer>
)