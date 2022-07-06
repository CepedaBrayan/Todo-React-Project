import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI(props) {
  return (
    <React.Fragment>
      <TodoCounter
        todosLength={props.todosLength}
        completedTodosLength={props.completedTodosLength}
      />

      <TodoSearch
        searcherValue={props.searcherValue}
        setSearcherValue={props.setSearcherValue}
      />

      <TodoList>
        {props.loading && <p>Loading...</p>}
        {props.error && <p>{props.error}</p>}

        {props.searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => props.completeTodo(todo.text)}
            onDelete={() => props.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
