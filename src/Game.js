// src/Game.js
import React, { useState } from "react"

const Game = () => {
  const [score, setScore] = useState(0)

  const increaseScore = () => {
    setScore(score + 1)
  }

  return (
    <div>
      <h1>Simple Game</h1>
      <p>Score: {score}</p>
      <button onClick={increaseScore}>Increase Score</button>
    </div>
  )
}

export default Game
