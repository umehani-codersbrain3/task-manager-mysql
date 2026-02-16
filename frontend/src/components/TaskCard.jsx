import { useState } from "react";

function TaskCard({ task, onDelete, onUpdate }) {
  const [status, setStatus] = useState(task.status);

  const toggleStatus = () => {
    const newStatus =
      status === "Pending" ? "Completed" : "Pending";

    setStatus(newStatus);
    onUpdate(task.id, { ...task, status: newStatus });
  };

  return (
    <div className={`card ${status === "Completed" ? "done" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span className="status">{status}</span>

      <div className="btn-group">
        <button className="toggle" onClick={toggleStatus}>
          Toggle
        </button>
        <button
          className="delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;