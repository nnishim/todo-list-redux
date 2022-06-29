import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import { addTodo } from "../../store/todoSlice";

function TodoList() {
  const dispatch  = useDispatch()
  
  const todos = useSelector(state => state.todos.todos)

  const addTask = () => {
    dispatch(addTodo(text))
    setText('')
  }

  const [text, setText] = useState(""); 

  return (
    <>  
        <TodoForm text={text} handleInput={setText} handleSubmit={() => addTask()}/>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo}/>
          ))}
        </ul>
    </>
  );
}

export default TodoList;
