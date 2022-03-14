import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Displaytodo from './components/displaytodo';

function App() {
  const [listitems, setListitems] = useState([])

  const handleNewTodo = (newTodo)=>{
    setListitems([...listitems, newTodo])
  }

  const handleToggleComplete = (index) =>{
    const updatedtodo = listitems.map((todos, i) => {
      if (index===i){
        todos.complete = !todos.complete;
      }
      return todos;
    })
    setListitems(updatedtodo)
  }

  const toDelete = (j) =>{
    const removeTodo = [...listitems].filter((todo, i)=> i !== j)
    setListitems(removeTodo)
  }

  return (
    <div className="App">
      <Todo onNewTodo={handleNewTodo}/>
      <Displaytodo toDelete={toDelete} todos={listitems} handleToggleComplete={handleToggleComplete}/>
    </div>
  );
}

export default App;
