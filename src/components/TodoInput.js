import React,{useState} from 'react'

const TodoInput = (props) => {
    
    const [inputText , setInputText] = useState('');

    const handleEnterPress = (e) => {
      if (e.keyCode===13){
        props.addList(inputText)
        setInputText('')
      }
    }
  return (

    <div>
        <h1 className='todo'>My To Do List</h1>
        <input onChange={e => {setInputText(e.target.value)}} className='input' type='text' value={inputText} placeholder='Enter your ToDo list here'onKeyDown={handleEnterPress} ></input>
        <button onClick={() => {props.addList(inputText)}} className='btn'>Add</button>

    </div>
  )
}

export default TodoInput