import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import "../styles/ListItem.css";

const ListItem = ({ task }) => {
  const { deleteTask, tasks } = useContext(GlobalContext);

  const handleDelete = () => {
    deleteTask(task.id);
    const newTasks = tasks.filter(taskItem => taskItem.id !== task.id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <li className="listItem">
      {task.text} <button onClick={handleDelete}>X</button>
    </li>
  );
};

export default ListItem;
