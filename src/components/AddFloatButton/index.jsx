import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./AddFloatButton.scss";

const AddFloatButton = (props) => {
  return (
    <div className="fabContainer">
      <Fab onClick={() => props.handleOpen()} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddFloatButton;
