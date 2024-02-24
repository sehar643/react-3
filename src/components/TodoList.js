import React, { useState } from 'react'

const TodoList = (props) => { 


  return (
    <div>
      <ul>
      <li className='list'>
        {props.item}
        <span className='del'><i className="fa-solid fa-trash-can"onClick={e => {props.deleteItem(props.index)}} /></span>
      </li>
      </ul>
      
    </div>
  )
}

export default TodoList