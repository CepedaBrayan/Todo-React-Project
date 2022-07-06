import React from "react";
import "./TodoSearch.css";

function TodoSearchUI(props) {
  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Search"
        onChange={props.onSearchValueChange}
      />

      <p>You are searching for: {props.searcherValue}</p>
    </React.Fragment>
  );
}

export { TodoSearchUI };
