import { useState } from 'react'


import './App.css'

function App() {
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState([]);

  const fakeTasks = ['Eat dinner', 'do laundry', 'Go to the gym'];

  const addTaskHandler = () => {
    alert('clicked add task button')
    console.log(task)
    console.log(tasks)
    setTasks(task, ...tasks)
  }

  return (
    <>
      <h2>TODO LIST APP</h2>
      <input type='text' ></input>
      <button>Add task</button>
      {tasks.map(tsk, i => (
        <h3 key={i} >- {tsk}</h3>
      ))}

    </>
  )
}

export default App


      /* <h2  >TODO LIST APP</h2>
      <input 
        type='text'
        style={{outline: 'none'}}
        value={task}
        onChange={e => setTask(e.target.value)} 
      />
      <button onClick={addTaskHandler}>Add task</button>
      {tasks.map(task, i => (
        <p key={i}>- {task}</p>
      ))}    */