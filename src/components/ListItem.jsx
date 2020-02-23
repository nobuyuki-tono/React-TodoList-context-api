import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import "../styles/ListItem.css";

const ListItem = ({ task }) => {
  const { deleteTask } = useContext(GlobalContext);

  return (
    <li className="listItem">
      {task.text} <button onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
};

export default ListItem;
