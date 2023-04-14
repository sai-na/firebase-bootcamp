

// cd 1-tasklist  , cd  start , cd task ,npm i ,npm start


//create firebase project in website





//1 create firebase.js

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" // for database 

// const firebaseConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTHDOMAIN,
//   projectId: YOUR_PROJECTID,
//   storageBucket: YOUR_STORAGEBUCKET,
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
//   appId: YOUR_APPID
// };


// Initialize Firebase
//const app = initializeApp(firebaseConfig)
//export const db = getFirestore(app)



// explain css 
// tailwind css 
// react icons 
// react toast 



// define states 

const [tasks, setTasks] = useState([{
    text: "go for run",
    completed: false
}, {
    text: "buy some food",
    completed: true
}])






    < ul >
{
    tasks.map((task) => (

        console.log(task.text, task.completed)


    ))
}
</ul >

    // add <Task></Task>
    < Task
        key={index} task={task} />
// go to  task jsx 
//add arguments
{ task }

< p > {task.text}</p >


//then add  check box
checked = { task.completed ? 'checked' : '' }




// add css

//  li className =  {`flex justify-between p-4 my-2 capitalize ${task.completed ? "bg-slate-200" : "bg-slate-400"}`}
// p className  =  {`ml-2 cursor-pointer ${task.completed ? "line-through" : ""}`}



//fetch from database 



// import database  
import { db } from './firebase'



import {
    query,
    collection,
    onSnapshot,

} from 'firebase/firestore'



useEffect(() => {
    const q = query(collection(db, 'tasks'))

    return () => {

    }
}, [])



useEffect(() => {

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        console.log(querySnapshot)
        let tasksArr = []
        querySnapshot.forEach((doc) => {
            tasksArr.push({ ...doc.data(), id: doc.id })
        })
        //console.log(tasksArr)
        setTasks(tasksArr)
    })


    return () => {
        unsubscribe()
    }
}, [])


const [tasks, setTasks] = useState([])





//create 

const [input, setInput] = useState('')




    < input
value = { input }
onChange = {(e) => setInput(e.target.value)}


/>



onSubmit = { createTask }



// Create task
const createTask = async (e) => {
    e.preventDefault(e)
    if (input === '') {
        alert('Please enter a valid task')
        return
    }
    await addDoc(collection(db, 'task'), {
        text: input,
        completed: false,
    })
    setInput('')
}






// update



<Task

    toggleComplete={toggleComplete}

/>


    / task

// Update todo in firebase
Todo = ({ todo, toggleComplete, deleteTodo })

    < input onChange = {() => toggleComplete(task)} />


        < p onClick = {() => toggleComplete(task)} />



const toggleComplete = async (task) => {
    try {
        await updateDoc(doc(db, 'tasks', task.id), {
            completed: !task.completed,
        })
    } catch (error) {
        console.error('Error updating task:', error)
    }
}

<>

    <Task

        toggleComplete={toggleComplete}

    />


 // Delete taskstasks


    <button onClick={() => deleteTodo(todo.id)}></button>





 const deleteTask = async (id) => {
    try {
        await deleteDoc(doc(db, 'tasks', id))
    } catch (error) {
        console.error('Error deleting tasks:', error)
    }
  }


