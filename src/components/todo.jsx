import React, {useState} from 'react'

const Todo = (props) => {
    const [todo, setTodo] = useState("")

    const handleSubmit =(e) => {
        e.preventDefault()
        props.onNewTodo( {complete:false, content:todo})
        setTodo("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>New Todo: </label>
            <input type="text" name="todo" value={todo} 
            onChange={(e)=>setTodo(e.target.value)}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default Todo