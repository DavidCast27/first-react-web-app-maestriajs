import React from "react";
import AddFloatButton from "../AddFloatButton";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <React.Fragment>
      <AddFloatButton handleOpen={props.handleOpen} />
      <div className="footer">react-app</div>
    </React.Fragment>
  );
};

export default Footer;
