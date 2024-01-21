import React, { useState } from 'react'
import HomePage from './Components/HomePage'
import GamePage from './Components/gamepage'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const handleStart = () => {
    setIsGameStarted((true))
  }

  return (
    <>
      {
        (isGameStarted) ? <GamePage></GamePage> : <HomePage handleStart={handleStart}></HomePage>
      }
    </>
  )
}

export default App
