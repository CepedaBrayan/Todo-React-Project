import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocalStorage("todos_v2", []);

  const [searcherValue, setSearcherValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

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
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todosLength,
        completedTodosLength,
        searcherValue,
        setSearcherValue,
        todos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
