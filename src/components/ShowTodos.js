import _ from 'lodash';
import React from "react";
import { RIEInput } from 'riek2';
import  IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { TodoContext } from "../TodoContext";

const handleUpdateChange = ({todo: updated_value }, key, updateTodo) => {
  updateTodo(key,updated_value);
}

export default () => {
  return (
    <TodoContext.Consumer>
    { ({todo_list, updateTodo, removeTodo}) => (
      <List component='nav'>
        {Object.keys(todo_list).map(key => (
          <ListItem key={key}>
            <ListItemText>
              <RIEInput
                change={ e => handleUpdateChange(e, key, updateTodo)}
                value={_.capitalize( todo_list[key].todo )}
                propName='todo'
                />
            </ListItemText>
              <ListItemIcon>
                <IconButton onClick={ () => removeTodo(key) } aria-label="Delete">
                  <DeleteIcon fontSize="small" />
                </IconButton>                
            </ListItemIcon>
          </ListItem>
          ))}
      </List>
    )}
  </TodoContext.Consumer>    
  )
}