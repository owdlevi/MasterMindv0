import React, { useState } from 'react'
import StartGame from '../components/StartGame'
import GameRow from '../components/gameRow'
import GameRowActive from '../components/GameRowActive'
import TheCode from '../components/TheCode'
import TopGame from '../components/TopGame'
import CodeCracked from '../components/CodeCracked'
import Kawaii from '../components/Kawaii/Kawaii'
import utils from '../utils'
import { Flex } from 'theme-ui'

// 10 Game Row,
//1 active, choose colors, when all 4 colors selected show ok button to submit
//Already selected colors, - 4 pin box with color statuses, white for right color wrong place, black right color right place (Randomize display)
//aviable Rows - no interactions
// hidden row with colors
// Create MasterMind Multi Player!!!!! One player to generate the code, others to crack, wins the player with less guess and time!!!!
// https://en.wikipedia.org/wiki/Mastermind_(board_game)

let code = []

const Game = ({ privateGame }) => {
  const [gameChoices, setGameChoices] = useState([])
  const [gameStatus, setGameStatus] = useState('notstarted')
  const [startTime, setStartTime] = useState(null)
  const [round, setRound] = useState(1)
  const [result, setResult] = useState(null)
  const [mood, setMood] = useState('happy')

  const startGame = () => {
    setGameStatus('started')
    setGameChoices([])
    setStartTime(Date.now())
    setMood('excited')
    code = utils.generateRandomCode(4)
    console.log(code)
  }

  const handleChoice = (playerChoices) => {
    //check playerChoices with code
    const answers = playerChoices.filter(utils.onlyUnique).map((item, i) => {
      return utils.checkGuessinCode(item, i, code)
    })

    //if answers.filter[correct] == 4 Code has been cracked
    //randomize display of pins
    if (answers.filter((answerStatus) => answerStatus === 'correct').length === 4) {
      gameIsOver()
    } else setRound(round + 1)

    if (round > 2) setMood('sad')

    const pins = answers
      .filter((answerStatus) => answerStatus)
      .map((answerStatus) => (answerStatus === 'correct' ? 'black' : 'white'))
      .sort(utils.sortArray)

    const newGameChoices = [...gameChoices, { colors: playerChoices, pins: pins || [] }]

    setGameChoices(newGameChoices)
  }

  const gameIsOver = () => {
    setGameStatus('codecracked')
    const stopTime = Date.now()
    const timeDifference = Math.floor((stopTime - startTime) / 1000)
    const minutes = Math.floor((timeDifference / 60) % 60)
    const seconds = timeDifference % 60
    const totalPoints = round * 30 + timeDifference
    setResult({
      round,
      time: {
        minutes,
        seconds
      },
      totalPoints
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        margin: '40px auto',
        minHeight: '300px'
      }}>
      <div className="GameStatus">
        <Kawaii mood={mood} />
      </div>
      <div className="GameArea">
        {gameStatus === 'notstarted' ? (
          <StartGame startGame={startGame} />
        ) : (
          <>
            <TopGame round={round} startTime={startTime} stopTimer={gameStatus === 'codecracked'} />
            {gameChoices.map((choices, i) => (
              <GameRow key={i} choices={choices} />
            ))}
            {gameStatus !== 'codecracked' && <GameRowActive handleChoice={handleChoice} />}
            {/* <TheCode /> */}
            <TheCode key="kode" showCode={gameStatus === 'codecracked'} theCode={code} />
            {gameStatus === 'codecracked' ? <CodeCracked startGame={startGame} result={result} /> : ``}
          </>
        )}
      </div>
    </div>
  )
}

export default Game
