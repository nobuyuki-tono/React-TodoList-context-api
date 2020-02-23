import React, { useState, useContext } from "react";

import GlobalContext from "../context/GlobalState";

import "../styles/AddTask.css";

const AddTask = () => {
  const [task, setTask] = useState("");

  const { addTask } = useContext(GlobalContext);

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100000000),
      text
    };
    addTask(newTask);
  };
  return (
    <>
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
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
