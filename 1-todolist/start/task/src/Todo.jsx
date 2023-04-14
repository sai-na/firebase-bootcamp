import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
}

//  li className =  {`flex justify-between p-4 my-2 capitalize ${task.completed ? "bg-slate-200" : "bg-slate-400"}`}
// p className = =  {`ml-2 cursor-pointer ${task.completed ? "line-through" : ""}`}


const Todo = ({ }) => {
  return (
    <li className={""}>
      <div className={style.row}>
        <input onChange={""} type='checkbox' checked="" />
        <p onClick={""} className="">

        </p>
      </div>
      <button onClick={""}>{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default Todo
