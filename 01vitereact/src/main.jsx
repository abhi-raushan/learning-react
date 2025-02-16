import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chai from './Chai.jsx'
import App from './App.jsx'
import React from 'react'

// Rendering html using function.
/*
function MyApp(){
  return(
    <div>
      <h1>Chai  with HC</h1>
    </div>
  )
}*/

/* 
  // This is not working because we are giving convension according to our thinking.
  const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
} */

/*
  //how react creates an elements
  const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visite to google'
  )*/

    /*
const anotherElement = (
  <a href = "https://google.com" target='_blank'>Visite google</a>
)*/

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
