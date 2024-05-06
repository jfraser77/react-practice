import './App.css'
import Header from './components/Header'
import styled from 'styled-components'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

function App() {



  return (
    <Wrapper>
      <Header /> 
      <Main>
        <MainContent style={{width: '100vw'}}>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good morning, Joe</Greeting>
            {[<h2>Cooking</h2>, <h2>Reading</h2>]}
            <TodoList/>
          </TodoContent>
        </MainContent>        
      </Main>
    </Wrapper>
  )

}

export default App

const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`

const Main = styled.div`
  display: flex;  

`

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
`

const TodoContent = styled.div`
  max-width: 700px;
  width: 100%; 
`

const Title = styled.div`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 700;
`

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
`



// const [tasks, setTasks] = useState([])
// const [task, setTask] = useState('')

// const fakeTasks = ['Eat dinner', 'Do laundry', 'Go to the gym']

// const addTaskHandler = () => {
//   console.log('clicked add task button')
//   console.log(task)
//   setTasks([task, ...tasks])
//   console.log(tasks)
// }
// return (
//   <>
//     <h2 style={{color: 'white'}}>TODO LIST APP 🚀</h2>
//     <input 
//       type="text" 
//       style={{outline: 'none'}}
//       value={task} 
//       onChange={e => setTask(e.target.value)}
//     />
//     <button onClick={addTaskHandler}>Add task</button>
//     {tasks.map((task, i) => (
//       <p key={i}>{task}</p>
//     ))}
//   </>
// )