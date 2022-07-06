import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButtonUI(props) {
  const value = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <button
        className="CreateTodoButton"
        onClick={() => value.setOpenModal(!value.openModal)}
      >
        +
      </button>
    </React.Fragment>
  );
}

export { CreateTodoButtonUI };
