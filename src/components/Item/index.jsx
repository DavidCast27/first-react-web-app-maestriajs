import React from "react";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./Item.scss";

const Item = (props) => {
  const itemsArray = props.items;

  return itemsArray.map((item) => {
    return (
      <ListItem key={item.id}>
        <ListItemText primary={item.name} secondary={item.description} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => props.remove(item.id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => props.edit(item.id)}
            edge="end"
            aria-label="delete"
          >
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
};

export default Item;
