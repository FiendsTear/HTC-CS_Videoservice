import React from 'react';
import { cn } from "@bem-react/classname";
import "./Button.css";

function Button(props) {

  const cnButton = cn("button");

  const clickHandle = () => {
    props.clickHandle();
  }

  return (
    <div className={props.type==="login" ? cnButton({"type": "login"}) : cnButton()} onClick={clickHandle}>{props.title}</div>
  );
}

export default Button;
