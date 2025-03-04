import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')


  // useRef: kisi cheez ka refrence lena hota hai to useRef use karte hai

  const passwordRef = useRef(null)

  const copyPassworedToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // We can also set range
    // passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password)
  },[password])

  // To used callback to optimize passwordgenerator and use cache
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+{}[]~`"
    }
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // useEffect: To run password generator
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-2 my-8 py-2  text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            readOnly
            ref={passwordRef}
          ></input>
          <button 
          onClick={copyPassworedToClipboard} 
          className='text-white bg-orange-500 px-4'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            ></input>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            ></input>
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => { setCharAllowed((prev) => !prev) }}
            ></input>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
