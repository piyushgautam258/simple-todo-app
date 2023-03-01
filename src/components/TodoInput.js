import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
      />
      <button className="add-btn btn btn-primary" onClick={()=>props.addList(inputText)}>+</button>
    </div>
  );
}

export default TodoInput;
