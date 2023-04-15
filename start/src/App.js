import Task from './Task'
import { useEffect, useState } from "react"
import { MdAdd } from 'react-icons/md'
function App() {


  // states ,  input & task

  // Create task


  // Read task from firebase
  useEffect(() => {


    return () => {

    }
  }, [])



  // Update task in firebase



  // Delete task



  return (
    <div className="min-h-screen w-screen p-4 bg-gradient-to-r from-rose-400 to-orange-300">
      <div className="bg-white max-w-[800px] w-full mx-auto rounded-md shadow-lg p-4">
        <h3 className="text-4xl font-bold text-center text-sky-600 p-2">Task list</h3>
        <form
          className="flex justify-between items-center mb-4">
          <input


            className="border-2 border-gray-300 p-2 w-full text-xl focus:outline-none focus:border-sky-600 rounded"
            type='text'
            placeholder='Add task'
          />
          <button className="border-2 border-transparent px-4 py-2 bg-gradient-to-r from-orange-400 to-rose-400  transition-colors duration-200">
            <MdAdd className='text-white' size={30} />
          </button>
        </form>
        <ul>
          {/* <Task
          /> */}

        </ul>

        <p className="text-center p-2 text-gray-600">{`You have 2 tasks `}</p>

      </div>
    </div>
  )
}

export default App
