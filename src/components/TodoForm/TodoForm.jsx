import React from "react";

function TodoForm({text, handleInput, handleSubmit}) {

  return (
    <div className="form">
      <input value={text} type="text" onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}

export default TodoForm;
