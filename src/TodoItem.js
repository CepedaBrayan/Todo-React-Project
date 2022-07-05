import React from "react";

function TodoItem(props) {
  return (
    <li>
      {props.text} {props.completed}
    </li>
  );
}

export { TodoItem };
