import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
  }

  function removeTask(task) {
    const updatedTasks = tasks.filter(function (t) {
      return t.id !== task.id;
    });
    setTasks(updatedTasks);
  }

  function toggleComplete(task) {
    const updatedTasks = tasks.map(function (t) {
      if (t.id === task.id) {
        t.complete = !t.complete;
      }
      return t;
    });
    setTasks(updatedTasks);
  }

  function saveEdit(editedTask) {
    const updatedTasks = tasks.map(function (t) {
      if (t.id === editedTask.id) {
        return editedTask;
      }
      return t;
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={removeTask}
            toggleComplete={toggleComplete}
            saveEdit={saveEdit}
          />
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
}
