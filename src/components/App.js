import React, { Component,} from 'react';
import emoji from 'react-easy-emoji'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import TodoProvider from '../TodoProvider';
import ShowTodos from './ShowTodos';
import NewTodo from './NewTodo';
import Nav from './Nav';

const styles = {
  root: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "25px",
    textAlign: "center",
  },
  newTodo: {
    textAlign: 'center',
    
  }
}

class App extends Component {
  state = {
    on: false,
    themeType: 'light'
  }

  theme = () => createMuiTheme({
    palette: {
      type: this.state.themeType
    },
    typography: {
      useNextVariants: true,
    },    
  })  

  toggleTheme = () => {
    if (!this.state.on) {
      this.setState({
        on: !this.state.on,
        themeType: 'dark'
      })
    } else {
      this.setState({
        on: !this.state.on,
        themeType: 'light'
      })
    }
  }
  render() {
    const { classes } = this.props;
    return(
      <MuiThemeProvider theme={this.theme()}>
        <CssBaseline/>
        <Grid container spacing={0} className={classes.root}>
          <Typography variant='h4'>
            Cached Tasks
            <span onClick={() => this.toggleTheme() }>{ emoji('🍪', )}</span>
          </Typography>
          <TodoProvider>
            <Grid item className={classes.newTodo} sm={12}>
              <NewTodo />
            </Grid>
            <ShowTodos />
            <Nav />
          </TodoProvider>
        </Grid>
      </MuiThemeProvider>
    );
  }
};

export default withStyles(styles)(App);