import "./App.css";
import React from "react";
import { AppUI } from "./App";

const defaultTodos = [
  { text: "Learn about React", completed: false },
  { text: "Meet friend for lunch", completed: false },
  { text: "Build really cool todo app", completed: true },
  { text: "Have a coffee", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    todos.splice(todoIndex, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  return (
    <AppUI
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
