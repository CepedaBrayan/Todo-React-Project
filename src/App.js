import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";

const defaultTodos = [
  { text: "Learn about React", completed: false },
  { text: "Meet friend for lunch", completed: false },
  { text: "Build really cool todo app", completed: true },
  { text: "Have a coffee", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const todosLength = todos.length;

  const completedTodosLength = todos.filter((todo) => todo.completed).length;
  const [searcherValue, setSearcherValue] = React.useState("");
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
    <React.Fragment>
      <TodoCounter
        todosLength={todosLength}
        completedTodosLength={completedTodosLength}
      />

      <TodoSearch
        searcherValue={searcherValue}
        setSearcherValue={setSearcherValue}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
