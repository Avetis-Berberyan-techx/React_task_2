import { useState } from "react";
import "./TodoItems.css";

import deleteIcon from "../../assets/trash.svg";
import checkIcon from "../../assets/check-square.svg";
import editIcon from "../../assets/pencil.svg";

function TodoItem({ id, taskText, completed, onDelete, onEdit, onComplete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(taskText);

  function handleDelete() {
    onDelete(id);
  }

  function handleComplete() {
    onComplete(id, !completed);
  }

  function handleEditToggle() {
    if (isEdit) onEdit(id, text);
    setIsEdit((prev) => !prev);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleEditToggle();
    if (e.key === "Escape") {
      setText(taskText);
      setIsEdit(false);
    }
  }

  return (
    <div className={`todo ${completed ? "todo--completed" : ""}`}>
      {isEdit ? (
        <input
          className="todo__text todo__text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <p className="todo__text">{text}</p>
      )}

      <div className="todo__actions">
        <button
          className="todo__button todo__button-edit"
          type="button"
          onClick={handleEditToggle}
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
              completed ? "-checked" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default function TodoItems({
  tasks,
  DeleteById,
  EditByID,
  changeCompletedByID,
  filter = "all",
}) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Active") return !task.completed;
    return true;
  });

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          taskText={task.text}
          completed={task.completed}
          onDelete={DeleteById}
          onEdit={EditByID}
          onComplete={changeCompletedByID}
        />
      ))}
    </div>
  );
}
