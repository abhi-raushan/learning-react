import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'

function App() {

  var firstVideo={
    title: "Learning reat day-6",
    description : "This is day-6 of learning react",
    price: "100"
  }

  return (
    <>
        <h1 className='bg-green-600 text-black p-4 rounded-xl'>Tailwind test</h1> 
        <Card video={firstVideo} text="Random Text" />
        <Card text="Not Random Text" />
    </>
  )
}

export default App
