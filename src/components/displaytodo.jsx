import React from 'react'
import './newcss.css'
const Displaytodo = (props) => {
  return (
    <div>
        {
            props.todos.map(( todos, i)=>{
                const todoClasses=[];
                if(todos.complete) {
                    todoClasses.push("line-through")
                }
                return(
                    <div key={i}>
                        <p className={todoClasses.join(" ")}>{todos.content}</p>
                        <input type="checkbox" onChange={(e)=>props.handleToggleComplete(i)} checked={todos.complete}/>
                        <button onClick={() => props.toDelete(i)}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Displaytodo