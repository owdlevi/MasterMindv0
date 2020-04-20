import React, { useState } from 'react'
import GameRow from '../components/gameRow'
import GameRowActive from '../components/GameRowActive'
import GameRowSelect from '../components/gameRowSelect'
import { gameSettings } from '../gameConfig'

// 10 Game Row,
//1 active, choose colors, when all 4 colors selected show ok button to submit
//Already selected colors, - 4 pin box with color statuses, white for right color wrong place, black right color right place (Randomize display)
//aviable Rows - no interactions
// hidden row with colors

const demoChoices = [
  {
    colors: [gameSettings.gameColors[1], gameSettings.gameColors[2], gameSettings.gameColors[3], gameSettings.gameColors[0]],
    answers: []
  },
  {
    colors: [gameSettings.gameColors[3], gameSettings.gameColors[4], gameSettings.gameColors[0], gameSettings.gameColors[5]],
    answers: []
  }
]
const Game = () => {
  const [gameChoices, setGameChoices] = useState(demoChoices)
  const [currentChoices, setCurrentChoices] = useState(['', '', '', ''])

  const gameState = {
    gameStarted: true,
    gameColors: gameSettings.gameColors
  }

  const handleChoice = (color, position) => {
    const newChoices = [color, color, color, color]
    setCurrentChoices(newChoices)
  }

  return (
    <div className="GameArea">
      {gameChoices.map((choices) => (
        <GameRow choices={choices} />
      ))}
      <GameRowActive currentChoices={currentChoices} handleChoice={handleChoice} />
      {/* <GameRowSelect /> */}
    </div>
  )
}

export default Game
