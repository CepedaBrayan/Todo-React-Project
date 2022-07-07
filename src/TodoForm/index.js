import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const value = React.useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    value.setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    value.addTodo(newTodoValue);
    value.setOpenModal(false);
  };

  return (
    <div className="todo-form">
      <form onSubmit={onSubmit}>
        <label>What you have to do today?</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Input here what you have to do"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Add
          </button>
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export { TodoForm };
