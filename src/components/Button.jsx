import React from "react";

function Button(props) {
  return <button onClick={props.deteleItem}>{props.text}</button>;
}

export default Button;
