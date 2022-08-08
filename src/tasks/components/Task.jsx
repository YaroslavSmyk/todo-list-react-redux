import React from "react";
import classNames from "classnames";

const Task = ({ id, done, text, handleTaskStatusChange, handleTaskDelete }) => {
  // console.log(id);
  return (
    <li className={classNames("list-item", { "list-item_done": done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => handleTaskStatusChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => handleTaskDelete(id)}
      ></button>
    </li>
  );
};

export default Task;
