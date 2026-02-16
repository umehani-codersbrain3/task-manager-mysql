import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  const updateTask = async (id, updatedData) => {
    await axios.put(`http://localhost:5000/tasks/${id}`, updatedData);
    fetchTasks();
  };

  return (
    <div className="container">
      <h1 className="title">✨ Task Manager</h1>
      <TaskForm refresh={fetchTasks} />

      <div className="task-grid">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskPage;