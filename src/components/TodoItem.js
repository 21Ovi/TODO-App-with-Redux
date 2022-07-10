import React from "react";
import "./TodoItem.css";

import { Checkbox } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      {/* name */}
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
