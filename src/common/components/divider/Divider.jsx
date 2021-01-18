import React from "react";
import "./Divider.css";

function Divider(props) {
  const classes = props.className ? `Divider ${props.className}` : 'Divider';
  return (
    <div className={classes} />
  )
}

export default Divider;