import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setjokes] = useState([])
  useEffect(()=>{
    axios.get('https://localhost:3000/jokess')
  })
  return (
    <>
     <h1>hello hi bye bye</h1>
     <p>{jokes.length}</p>
     {
      jokes.map((joke,index)=>{
        <div key={joke.index}>
          <h3>{joke.joke}</h3>
        </div>
      })
     }
    </>
  )
}

export default App
