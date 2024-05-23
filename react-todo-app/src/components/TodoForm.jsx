import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <>
      <h2>Todo List</h2>
      <pre className="todo-subtitle">
        Click to mark <span className="todo-subtitile-text">todo&apos;s</span> as completed!
      </pre>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
