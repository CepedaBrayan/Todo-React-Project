import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const value = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {value.error && <p>It was an error...</p>}
        {value.loading && <p>Loading...</p>}
        {!value.loading && !value.searchedTodos.length && (
          <p>Create your first TODO!</p>
        )}

        {!value.loading &&
          value.searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => value.completeTodo(todo.text)}
              onDelete={() => value.deleteTodo(todo.text)}
            />
          ))}
      </TodoList>

      {value.openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
