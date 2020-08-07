import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
      flexGrow: 1,
  }
 
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <Typography className={classes.title} variant="h6" color="inherit">
                react-app
            </Typography>
            <Button href="/" color="inherit" >Home</Button>
            <Button href="/about" color="inherit" >About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
