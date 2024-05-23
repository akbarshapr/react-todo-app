import { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (event) => {
    event.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Update your task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </>
  );
};

export default EditTodoForm;
