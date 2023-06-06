import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask } from '../Redux/TodoSlice/TodoSlice'
import EditTask from './EditTask'

function Todoitem({todo}) {
 const dispatch = useDispatch()
  return (
    <div className={`todoitem ${todo.isDone?  "done" : "notdone"}`}>
      <div className='text'>
      <h2> {todo.title} </h2>
      <p> {todo.description} </p>
      </div>
      <span onClick={()=>dispatch(doneTask({id:todo.id}))}> {todo.isDone?"Done" : "NotDone"}</span>
     <EditTask id={todo.id}/>

      <button onClick={()=>dispatch(removeTask({id:todo.id}))}>remove</button>
    </div>
  )  
}

export default Todoitem