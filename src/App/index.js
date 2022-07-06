import "./App.css";
import React from "react";
import { AppUI } from "./App";

// const defaultTodos = [
//   { text: "Learn about React", completed: false },
//   { text: "Meet friend for lunch", completed: false },
//   { text: "Build really cool todo app", completed: true },
//   { text: "Have a coffee", completed: true },
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState();

  let parsedItem;
  const localStorageItem = localStorage.getItem(itemName);
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newTodos) => {
    try {
      setItem(newTodos);
      localStorage.setItem(itemName, JSON.stringify(newTodos));
    } catch (error) {
      setError(error.message);
    }
  };

  return { item, saveItem, error };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
  } = useLocalStorage("todos_v2", []);

  const [searcherValue, setSearcherValue] = React.useState("");

  const todosLength = todos.length;
  const completedTodosLength = todos.filter((todo) => todo.completed).length;

  let searchedTodos = todos;
  if (searcherValue.length >= 0)
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searcherValue.toLowerCase())
    );

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    todos[todoIndex].completed = true;
    const newTodos = [...todos];
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    todos.splice(todoIndex, 1);
    const newTodos = [...todos];
    saveTodos(newTodos);
  };

  console.log("Before user effect");
  React.useEffect(() => {
    console.log("user effect");
  }, []);
  console.log("After user effect");

  return (
    <AppUI
      error={error}
      todosLength={todosLength}
      completedTodosLength={completedTodosLength}
      searcherValue={searcherValue}
      setSearcherValue={setSearcherValue}
      todos={todos}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
