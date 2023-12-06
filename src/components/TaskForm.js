import { useState } from "react";
import { nanoid } from "nanoid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default function TaskForm(props) {
  const [task, setTask] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleAddButtonClick() {
    setShowInput(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      task: task,
      complete: false,
      id: nanoid()
    };
    props.addTask(newTask);
    setTask("");
    setShowInput(false); // hide the input after adding the task
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <div className="newTask">
          {!showInput && (
            <Button variant="contained" color="success" onClick={handleAddButtonClick}>Add Task</Button>
          )}
          {showInput && (
            <label>
              <TextField id="outlined-basic"
                type="text"
                onChange={handleTaskChange}
                placeholder="Add new task..."
                value={task}
              />
              <Button variant="contained" color="success" type="submit">Add</Button>
            </label>
          )}
        </div>
      </form>
    </div>
  );
}
