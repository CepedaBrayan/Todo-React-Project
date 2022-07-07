import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const value = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      You already finished {value.completedTodosLength} of {value.todosLength}{" "}
      TODOs
    </h2>
  );
}

export { TodoCounter };
