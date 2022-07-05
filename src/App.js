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
  { text: "Build really cool todo app", completed: false },
  { text: "Have a coffee", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searcherValue, setSearcherValue] = React.useState("");

  return (
    <React.Fragment>
      <TodoCounter
        todosLength={todos.length}
        completedTodosLength={todos.filter((todo) => todo.completed).length}
        setTodos={setTodos}
      />

      <TodoSearch
        searcherValue={searcherValue}
        setSearcherValue={setSearcherValue}
      />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
