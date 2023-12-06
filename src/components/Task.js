import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';

export default function Task(props) {
  const task = props.task;
  const [completionTime, setCompletionTime] = useState(null);
  const [creationTime, setCreationTime] = useState(new Date());
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    if (!task.complete) {
      setCompletionTime(new Date());
    } else {
      setCompletionTime(null);
    }
    props.toggleComplete(task);
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleSaveEdit() {
    setEditMode(false);
    props.saveEdit({ ...task, task: editedTask });
  }

  function handleCancelEdit() {
    setEditMode(false);
    setEditedTask(task.task);
  }

  return (
    <li className="task">
      <div className="task-details">
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              checked={task.complete}
            />
            {editMode ? (
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : task.complete === true ? (
              <del>{task.task}</del>
            ) : (
              <>
                {task.task}
              </>
            )}
          </span>
          {completionTime && (
            <span className="completion">
              {' '}
              (Completed at {completionTime.toLocaleTimeString()} on{' '}
              {completionTime.toLocaleDateString()})
            </span>
          )}
          {creationTime && (
            <span className="creation">
              {' '}
              (Created at {creationTime.toLocaleTimeString()} on{' '}
              {creationTime.toLocaleDateString()})
            </span>
          )}
        </p>
      </div>

      <div>
        {editMode ? (
          <>
            <button onClick={handleSaveEdit}>
              <CheckIcon color="primary" fontSize="large" />
            </button>

          </>
        ) : (
          <button onClick={handleEdit}>
            <CreateIcon color="primary" fontSize="large" />
          </button>
        )}

        <button onClick={handleDelete}>
          <DeleteIcon color="warning" fontSize="large" />
        </button>
      </div>
    </li>
  );
}
