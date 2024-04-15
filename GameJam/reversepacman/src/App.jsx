import { useState } from 'react'
import Counter from './components/Counter'
import Introduction from './components/Introduction'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Introduction />
      <Counter></Counter>
    </>
  )
}

export default App
