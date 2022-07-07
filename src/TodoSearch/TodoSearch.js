import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearchUI(props) {
  const value = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Search"
        onChange={props.onSearchValueChange}
      />

      <p>You are searching for: {value.searcherValue}</p>
    </React.Fragment>
  );
}

export { TodoSearchUI };
