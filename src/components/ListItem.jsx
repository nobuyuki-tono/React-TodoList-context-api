import React from "react";

import "../styles/ListItem.css";

const ListItem = ({ text }) => {
  return (
    <li className="listItem">
      {text} <button>X</button>
    </li>
  );
};

export default ListItem;
