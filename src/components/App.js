import React, { Component, Fragment } from 'react';
import emoji from 'react-easy-emoji'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TodoProvider from '../TodoProvider';
import ShowTodos from './ShowTodos';
import NewTodo from './NewTodo';

const styles = {
  root: {
    flexGrow: 1,
    
  },
  newTodo: {
    textAlign: 'center',
    
  }
}

/// onClick this return
// if (true)


class App extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Fragment>
        <Grid container justify='center' className={classes.root}>
        <Typography variant='headline'>
        { emoji('Cached Tasks 🍪')}
        </Typography>
        <CssBaseline/>
        <TodoProvider>
          <Grid item className={classes.newTodo} sm={12}>
            <NewTodo />
          </Grid>
          <ShowTodos />
        </TodoProvider>
        </Grid>
      </Fragment>
    );
  }
};

export default withStyles(styles)(App);