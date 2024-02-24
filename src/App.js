import logo from './logo.svg';
import React , {useState} from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {

  const [listTodo , setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText!=='')
    setListTodo ([...listTodo , inputText])
  }   

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo ([...newListTodo])
  }

  return (
    <div className="App">
      <TodoInput addList ={addList}/>
      {/* <TodoList /> */}
      {listTodo.map((listItems,i) => {
        return(
          <TodoList key={i} index={i} deleteItem ={deleteListItem}  item={listItems} />
        )
      })}
    </div>
  );
}

export default App;
