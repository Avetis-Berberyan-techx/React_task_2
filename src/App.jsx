import { useState, useEffect } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TodoItems from "./components/todoItems/TodoItems";
import Filters from "./components/filters/Filters";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
function App() {
  const [tasks, setTasks] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [theme, setTheme] = useState("light");

  //for dark/light mode
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // for creating new task
  function createTask(value) {
    if (!value) return;

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 0,
      text: value,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  //deleting Task by id
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  //change task text by id
  function EditById(id, newText) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task,
      ),
    );
  }

  // change task's status by id
  function changeCompletedByID(id, newCompleted) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: newCompleted } : task,
      ),
    );
  }

  // filter by status
  function activateFilter(ch) {
    setFilterType(ch);
  }
  return (
    <>
      <header className="app-header">
        <h1>Todo App</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <TaskInput onClick={createTask} />
        <Filters activateFilter={activateFilter} />
        <TodoItems
          tasks={tasks}
          DeleteById={deleteTask}
          EditByID={EditById}
          changeCompletedByID={changeCompletedByID}
          filter={filterType}
        />
      </main>
    </>
  );
}

export default App;
