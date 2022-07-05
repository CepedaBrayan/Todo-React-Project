import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const handleClick = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => handleClick("Todo should be Created")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
