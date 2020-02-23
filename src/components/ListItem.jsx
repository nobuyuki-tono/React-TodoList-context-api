import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import "../styles/ListItem.css";

const ListItem = ({ text }) => {
  const { tasks } = useContext(GlobalContext);

  return (
    <li className="listItem">
      {text} <button onClick={deleteItem}>X</button>
    </li>
  );
};

export default ListItem;
