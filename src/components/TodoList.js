import React from 'react'

function TodoList(props) {
  return (
    <div>
      <li className="list-item">
      {props.item}
      <button type="button" className="btn btn-dark" onClick={e=>{props.deleteItem(props.index)}}>Delete</button>

      </li>

    </div>
  )
}

export default TodoList
