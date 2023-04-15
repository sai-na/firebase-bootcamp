import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'



//  li className =  {`flex justify-between p-4 my-2 capitalize ${task.completed ? "bg-slate-200" : "bg-slate-400"}`}
// p className  =  {`ml-2 cursor-pointer ${task.completed ? "line-through" : ""}`}


const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className={`flex justify-between p-4 my-2 capitalize ${task.completed ? "bg-slate-200" : "bg-slate-400"}`}>
      <div className="flex">
        <input onChange={() => toggleComplete(task)} type='checkbox' checked={task.completed ? "checked" : ""} />
        <p onClick={() => toggleComplete(task)} className={`ml-2 cursor-pointer ${task.completed ? "line-through" : ""}`}>
          {task.text}
        </p>
      </div>
      <button onClick={() => deleteTask(task)}>{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default Task
