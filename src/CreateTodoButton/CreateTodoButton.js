import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButtonUI(props) {
  <button
    className="CreateTodoButton"
    onClick={() => props.handleClick("Todo should be Created")}
  >
    +
  </button>;
}

export { CreateTodoButtonUI };
