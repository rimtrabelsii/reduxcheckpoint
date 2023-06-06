import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'
import AddTodo from './AddTodo';


function Todolist() {
   const Todos = useSelector((state)=> state.todo.todolist);
const [showdone, setshowdone] = useState(false)
   
  return (

    <div className='todolist'> 
    <AddTodo/>
    <button onClick={()=>setshowdone(!showdone)}> {showdone ? "show undone" : "show done"} </button>
        {Todos.filter((todo)=>todo.isDone=== showdone).map((todo)=><Todoitem todo={todo}/>)}
        
    </div>
  )
}

export default Todolist
