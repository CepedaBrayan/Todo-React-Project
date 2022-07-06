import React from "react";
import "./TodoCounter.css";

function TodoCounter(props) {
  return (
    <h2 className="TodoCounter">
      You already finished {props.completedTodosLength} of {props.todosLength}{" "}
      TODOs
    </h2>
  );
}

export { TodoCounter };
