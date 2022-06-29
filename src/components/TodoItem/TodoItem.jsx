import React from "react";
import {useDispatch} from 'react-redux'
import {removeTodo} from '../../store/todoSlice'
import {toggle} from '../../store/todoSlice'

function TodoItem({id, text, completed }) {
  const  dispatch = useDispatch()
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggle(id))}
      />
      <span>{text}</span>
      <button onClick={() => dispatch(removeTodo(id))} style={{ color: "red" }}>
        X
      </button>
    </li>
  );
}

export default TodoItem;
