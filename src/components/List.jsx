import React, { useContext } from "react";

import ListItem from "./ListItem";

import { GlobalContext } from "../context/GlobalState";

import "../styles/List.css";

const List = () => {
  const { tasks } = useContext(GlobalContext);
  return (
    <div className="list">
      <h2>Tasks</h2>
      <ul className="tasks">
        {tasks.map(task => (
          <ListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default List;
