import React from "react";
import "./TodoSearch.css";

function TodoSearch(props) {
  const onSearchValueChange = (e) => {
    props.setSearcherValue(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Search"
        onChange={onSearchValueChange}
      />

      <p>You are searching for: {props.searcherValue}</p>
    </React.Fragment>
  );
}

export { TodoSearch };
