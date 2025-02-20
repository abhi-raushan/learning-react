import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

    // let counter = 0;

  const addValue = () =>{
    if(counter<20)
    {setCounter(counter+1)}
    console.log("Value Added: "+counter);
    }

    const removeValue = () =>{
      if(counter>0)
      {setCounter(counter-1)}
      console.log("Value Remove: "+counter);
      }

  return (
    <>
      <h1>React with Super Intelligent Hitesh</h1>
      <h2>Counter Value: {counter}</h2>
       
      <button onClick = {addValue}>Add Value</button>
      <br />
      <button onClick = {removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
