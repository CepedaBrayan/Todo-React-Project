import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searcher, setSearcher] = React.useState("All");

  const onSearchValueChange = (e) => {
    setSearcher(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        type="text"
        placeholder="Search"
        onChange={onSearchValueChange}
      />

      <p>Mostrando resultados de: {searcher}</p>
    </React.Fragment>
  );
}

export { TodoSearch };
