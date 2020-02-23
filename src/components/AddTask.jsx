import React, { useState } from "react";

import "../styles/AddTask.css";

const AddTask = () => {
  const [task, setTask] = useState("");

  const handleChange = e => {
    setTask(e.target.value);
  };
  return (
    <>
      <h3>Add New Task</h3>
      <form>
        <div className="form-controll">
          <label htmlFor="text">Task</label>
          <input
            type="text"
            value={task}
            onChange={handleChange}
            placeHolder="Enter task..."
          />
        </div>

        <button className="addTask-btn">Add Task</button>
      </form>
    </>
  );
};

export default AddTask;
