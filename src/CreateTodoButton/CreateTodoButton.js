import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButtonUI(props) {
  const value = React.useContext(TodoContext);
  return (
    <React.Fragment>
      console.log(
      {`CreateTodoButton ${value.openModal && "CloseCreateTodoButton"}`})
      <button
        className={`CreateTodoButton ${
          value.openModal && "CloseCreateTodoButton"
        }`}
        onClick={() => value.setOpenModal(!value.openModal)}
      >
        +
      </button>
    </React.Fragment>
  );
}

export { CreateTodoButtonUI };
