import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Item from "../Item";
import "./Items.scss";

const useStyles = makeStyles((theme) => {
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  });
});

const Items = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <Item
          items={props.items}
          edit={props.getItemToEdit}
          remove={props.removeFromList}
        />
      </List>
    </div>
  );
};

export default Items;
