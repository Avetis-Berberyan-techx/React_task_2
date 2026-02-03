import { useState } from "react";
import "./TodoItems.css";

import deleteIcon from "../../assets/trash.svg";
import checkIcon from "../../assets/check-square.svg";
import editIcon from "../../assets/pencil.svg";

function TodoItem({ id, taskText, completed, onDelete, onEdit, onComplete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [text, setText] = useState(taskText);

  function handleDelete() {
    onDelete(id);
  }

  function handleComplete() {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);
    onComplete(id, newCompleted);
  }

  function handleEditClick() {
    if (isEdit) {
      onEdit(id, text);
    }
    setIsEdit((prev) => !prev);
  }

  function handleEditKeyDown(e) {
    if (e.key === "Enter") handleEditClick();
    if (e.key === "Escape") {
      setText(taskText);
      setIsEdit(false);
    }
  }

  return (
    <div className={`todo ${isCompleted ? "todo--completed" : ""}`}>
      {isEdit ? (
        <input
          className="todo__text todo__text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleEditKeyDown}
          autoFocus
        />
      ) : (
        <p className="todo__text">{text}</p>
      )}

      <div className="todo__actions">
        <button
          className="todo__button todo__button-edit"
          type="button"
          onClick={handleEditClick}
        >
          <img src={editIcon} alt="Edit" />
        </button>

        <button
          className="todo__button todo__button-delete"
          type="button"
          onClick={handleDelete}
        >
          <img src={deleteIcon} alt="Delete" />
        </button>

        <button
          className="todo__button todo__button-check"
          type="button"
          onClick={handleComplete}
        >
          <img
            src={checkIcon}
            alt="Check"
            className={`todo__button-check--image${
              isCompleted ? "-checked" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}

function TodoItems({
  tasks,
  DeleteId,
  EditByID,
  changeCompletedByID,
  filter = "all",
}) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  function handleEdit(id, text) {
    EditByID(id, text);
  }

  function handleComplete(id, completed) {
    changeCompletedByID(id, completed);
  }

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          completed={task.completed}
          taskText={task.text}
          onDelete={DeleteId}
          onEdit={handleEdit}
          onComplete={handleComplete}
        />
      ))}
    </div>
  );
}

export default TodoItems;
