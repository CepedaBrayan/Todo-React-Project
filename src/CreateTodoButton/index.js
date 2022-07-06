import React from "react";
import { CreateTodoButtonUI } from "./CreateTodoButton";

function CreateTodoButton() {
  const handleClick = (msg) => {
    alert(msg);
  };

  return <CreateTodoButtonUI handleClick={handleClick} />;
}

export { CreateTodoButton };
