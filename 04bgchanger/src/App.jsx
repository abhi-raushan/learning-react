import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('blue')

  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-row justify-center bottom-10 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setColor("red")} className='outline-nonevpx-4 px-4 py-1 rounded-full text-white' 
          style={{backgroundColor: "red"}}
          >Red</button>
          <button onClick={()=>setColor("green")} className='outline-nonevpx-4 px-4 py-1 rounded-full text-white' 
          style={{backgroundColor: "green"}}
          >Green</button>
          <button onClick={()=>setColor("blue")} className='outline-nonevpx-4 px-4 py-1 rounded-full text-white' 
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
      <h1>BG Changer</h1>
    </div>
  ) 
}

export default App
