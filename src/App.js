import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import React, { useState } from "react";
import TodoList from './components/TodoList';

function App() {
  const [listTodo,setListTodo] = useState([]);
  let addList=(inputText)=>{
    setListTodo([...listTodo,inputText]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className='app-heading'>Simple Todo App</h1>

        <TodoInput  addList={addList}/>
        <hr/>
        {listTodo.map((listitem,i)=>{
          return(
            <TodoList item={listitem}></TodoList>
          )
        })}
      </div>
    </div>
  );
}
 
export default App;
