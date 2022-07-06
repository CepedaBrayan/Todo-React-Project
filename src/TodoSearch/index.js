import React from "react";
import { TodoSearchUI } from "./TodoSearch";

function TodoSearch(props) {
  const onSearchValueChange = (e) => {
    props.setSearcherValue(e.target.value);
  };

  return <TodoSearchUI onSearchValueChange={onSearchValueChange} />;
}

export { TodoSearch };
