import React, { useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import "../styles/AddTask.css";

const AddTask = () => {
  const [task, setTask] = useState("");

  const { addTask, tasks } = useContext(GlobalContext);

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100000000),
      text: task
    };
    addTask(newTask);
    const newTasks = [newTask, ...tasks];
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTask("");
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
            placeholder="Enter task..."
          />
        </div>

        <button className="addTask-btn">Add Task</button>
      </form>
    </>
  );
};

export default AddTask;
