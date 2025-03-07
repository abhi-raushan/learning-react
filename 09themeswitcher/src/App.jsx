import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/Theme'
import { useState, useEffect } from 'react'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // Actul change in theme

  useEffect(() => {
    //Remove both classes from html - light as well as dark
    document.querySelector('html').classList.remove('light', 'dark')

    // Add theme which is active now
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
