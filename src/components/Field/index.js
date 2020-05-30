import React from 'react';
import { cn } from "@bem-react/classname";
import "./Field.css";

function Field(props) {
  const cnField = cn("field");

  return (
    <input 
      type="text" 
      className={props.underlined ? cnField({"underlined": true}) : cnField()} 
      placeholder={props.placeholder} 
      onChange={props.handleChange} 
      value={props.fieldValue ? props.fieldValue : undefined} 
      style={props.style ? props.style : undefined}/>
  );
}

export default Field;