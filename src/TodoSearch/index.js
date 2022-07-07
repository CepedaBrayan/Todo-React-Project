import React from "react";
import { TodoSearchUI } from "./TodoSearch";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const value = React.useContext(TodoContext);
  const onSearchValueChange = (e) => {
    value.setSearcherValue(e.target.value);
  };

  return <TodoSearchUI onSearchValueChange={onSearchValueChange} />;
}

export { TodoSearch };
