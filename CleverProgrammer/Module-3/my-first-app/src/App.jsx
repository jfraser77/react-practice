import { useState, useEffect } from 'react'
import MyButton from './components/MyButton';
import './App.css'
import MyTitle from './components/MyTitle';
import ProfileCard from './components/ProfileCard';
import profiles from './fakeData';

function App() {
  const [count, setCount] = useState(0);
  const [fullname, setFullname] = useState('WAITING FOR DATA')


  const getRandomName = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    setFullname(data.results[0].name.first + ' ' + data.results[0].name.last)
    //console.log(fullName)
    return fullname
  }

  useEffect(() => {
    getRandomName() 

  }, [])

 
  return (
    <>
      <div >
        <h1 style={{color: 'red'}}>My Age is { count }</h1>
        <MyTitle style={{style: 'red'}} title='React JS!' />
        <button  onClick={() => setCount(count + 1)}>+</button>
        <button  onClick={() => setCount(count - 1)}>-</button>
        <MyButton title='BUY 🚀' color="green"/>
        <MyButton title='SELL🚀' color="red"/>
        {profiles.map((profile, i) => (
          <ProfileCard 
            key={i} 
            image={`https://robohash.org/${Math.random()}.png `}
            name={fullname} 
            title={profile.title} 
            description={profile.description}
            />
        ))}
      </div>
      
    </>
  )
}

export default App;
