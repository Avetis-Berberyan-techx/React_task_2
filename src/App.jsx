import { useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TodoItems from "./components/todoItems/TodoItems";

function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(value) {
    if (!value) return;

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 0,
      text: value,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function EditById(id, newText) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task,
      ),
    );
  }

  function changeCompletedByID(id, newCompleted) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: newCompleted } : task,
      ),
    );
  }

  return (
    <>
      <h1>Header</h1>
      <main>
        <TaskInput onClick={createTask} />
        <TodoItems
          tasks={tasks}
          DeleteId={deleteTask}
          EditByID={EditById}
          changeCompletedByID={changeCompletedByID}
          filter="all"
        />
      </main>
    </>
  );
}

export default App;
