import React, { useContext } from 'react'
import { AppContext } from '../App'

export default function GameOver() {
    const {gameOver,SetGameOver,currAttempt,correctWord} = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You guessed it correctly" : "Wrong Guess, Try again!" }</h3>
        <h1>Correct Word: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>you guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}
