import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'



//  li className =  {`flex justify-between p-4 my-2 capitalize ${task.completed ? "bg-slate-200" : "bg-slate-400"}`}
// p className  =  {`ml-2 cursor-pointer ${task.completed ? "line-through" : ""}`}


const Task = ({ }) => {
  return (
    <li className={""}>
      <div className="flex">
        <input onChange={""} type='checkbox' checked={""} />
        <p onClick={""} className={""}>

        </p>
      </div>
      <button onClick={""}>{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default Task
