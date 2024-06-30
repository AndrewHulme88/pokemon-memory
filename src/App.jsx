import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="header">
        <div id="header-left">
          <h1>Pokemon Memory Game</h1>
          <p>Score points for each unique Pokemon you click.</p>
          <p>However, selecting the same Pokemon twice will reset your score!!</p>
        </div>
        <div id="header-right">
          <span>
            Score:
            0
          </span>
          <span>
            High Score:
            0
          </span>
        </div>
      </div>
      <div id="card-grid">

      </div>
    </>
  )
}

export default App
