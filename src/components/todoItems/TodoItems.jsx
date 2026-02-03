import TodoItem from "../todoItem/TodoItem";
import "./TodoItems.css";

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

  function HandleEdit(id, text) {
    EditByID(id, text);
  }
  function HandleComplete(id, completed) {
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
          onEdit={HandleEdit}
          onComplete={HandleComplete}
        />
      ))}
    </div>
  );
}

export default TodoItems;
