import Task from './Task'
import { useEffect, useState } from "react"
import { MdAdd } from 'react-icons/md'
import { db } from './firebase'

import {
  query,
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc

} from "firebase/firestore"







function App() {


  // states ,  input & task

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  // Create task


  const createTask = async (e) => {
    e.preventDefault(e)
    if (input === "") {
      alert("enter some text")
      return
    }

    await addDoc(collection(db, "tasks"), {
      text: input,
      completed: false
    })

    setInput("")

  }




  // Read task from firebase
  useEffect(() => {

    const q = query(collection(db, "tasks"))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasksArr = []
      querySnapshot.forEach((doc) => {
        tasksArr.push({ ...doc.data(), id: doc.id })
      })
      console.log(tasksArr)

      setTasks(tasksArr)

    })


    return () => {

    }
  }, [])



  // Update task in firebase

  const toggleComplete = async (task) => {

    try {
      await updateDoc(doc(db, "tasks", task.id), {
        completed: !task.completed
      })

    } catch (error) {

      console.error(error)

    }

  }



  // Delete task

  const deleteTask = async (task) => {

    try {
      await deleteDoc(doc(db, "tasks", task.id))

    } catch (error) {

      console.error(error)

    }

  }



  return (
    <div className="min-h-screen w-screen p-4 bg-gradient-to-r from-rose-400 to-orange-300">
      <div className="bg-white max-w-[800px] w-full mx-auto rounded-md shadow-lg p-4">
        <h3 className="text-4xl font-bold text-center text-sky-600 p-2">Task list</h3>
        <form onSubmit={createTask}
          className="flex justify-between items-center mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}

            className="border-2 border-gray-300 p-2 w-full text-xl focus:outline-none focus:border-sky-600 rounded"
            type='text'
            placeholder='Add task'
          />
          <button className="border-2 border-transparent px-4 py-2 bg-gradient-to-r from-orange-400 to-rose-400  transition-colors duration-200">
            <MdAdd className='text-white' size={30} />
          </button>
        </form>
        <ul>
          {
            tasks.map((task, index) => (
              <Task key={index} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
            ))
          }


        </ul>

        <p className="text-center p-2 text-gray-600">{`You have 2 tasks `}</p>

      </div>
    </div>
  )
}

export default App
