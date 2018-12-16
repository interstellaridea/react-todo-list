import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Timeline from '@material-ui/icons/Timeline';
import Toggle from './Toggle';
import { TodoContext } from '../TodoContext';

const styles = {
  root: {
    width: "100%",
    position: "absolute",
    bottom: 0
  },
};

const handleSorting = (on, toggle, sortTodos) => {
  sortTodos(on);
  toggle();
  return;
}

export default withStyles(styles)(
  ({classes}) => {
    return(
      <TodoContext.Consumer>
        { ({sortTodos}) => (
          <BottomNavigation className={classes.root}>
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
            <Toggle>
              {({on, toggle}) => (
                <BottomNavigationAction
                  label="Sort"
                  icon={ on ? <KeyboardArrowUp /> : <KeyboardArrowDown /> }
                  onClick={ () => handleSorting(on, toggle, sortTodos) }
                />
              )}
            </Toggle>
            <BottomNavigationAction label="Chart" value="analytics" icon={<Timeline />} />
            {/* <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} /> */}
          </BottomNavigation>
        )}
      </TodoContext.Consumer>
    )
  }
)