import React from 'react';
import { cn } from "@bem-react/classname";
import "./Curtain.css";


function Curtain(props) {
  const cnCurtain = cn("curtain");

  const handleClick = () => {
    if (props.handleCurtain) {
      props.handleCurtain();
    }
    if (props.handleLoginForm) {
      props.handleLoginForm();
    }
  }

  return (
    <div 
      className={props.shutted ? cnCurtain({"shutted": true}) : cnCurtain({"shutted": false})}
      onClick={handleClick}></div>
  );
}

export default Curtain;
