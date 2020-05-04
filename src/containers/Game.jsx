/** @jsx jsx */
import { useState } from 'react'
import { jsx } from 'theme-ui'
import { get } from 'lodash/object'
import { useFirebaseAuth, useAuthUserInfo } from '../utils/auth/hooks'
import StartGameInfo from '../components/StartGameInfo'
import StartGame from '../components/StartGame'
import GameRow from '../components/gameRow'
import GameRowActive from '../components/GameRowActive'
import TheCode from '../components/TheCode'
import TopGame from '../components/TopGame'
import CodeCracked from '../components/CodeCracked'
import Kawaii from '../components/Kawaii/Kawaii'
import LeaderBord from '../components/LeaderBord'
import utils from '../utils'
import { loadFirestore } from '../utils/db'
import { gameSettings } from '../gameConfig'

//Add useEffect to check time, after 10 min the game is over
// 10 Game Row,
//1 active, choose colors, when all 4 colors selected show ok button to submit
//Already selected colors, - 4 pin box with color statuses, white for right color wrong place, black right color right place (Randomize display)
//aviable Rows - no interactions
// hidden row with colors
// Create MasterMind Multi Player!!!!! One player to generate the code, others to crack, wins the player with less guess and time!!!!
// https://en.wikipedia.org/wiki/Mastermind_(board_game)

let code = []

const Game = ({ gameroom }) => {
  const [gameChoices, setGameChoices] = useState([])
  const [gameStatus, setGameStatus] = useState('notstarted')
  const [startTime, setStartTime] = useState(null)
  const [round, setRound] = useState(1)
  const [result, setResult] = useState(null)
  const [mood, setMood] = useState('sad')

  const { initializing, user } = useFirebaseAuth()
  const AuthUser = get(useAuthUserInfo(), 'AuthUser', null)

  const startGame = () => {
    setGameStatus('started')
    setGameChoices([])
    setRound(1)
    setStartTime(Date.now())
    setMood('excited')
    code = utils.generateRandomCode(4)
    // console.log(code)
  }

  const handleChoice = (playerChoices) => {
    //check playerChoices with code
    const answers = playerChoices.filter(utils.onlyUnique).map((item, i) => {
      return utils.checkGuessinCode(item, i, code)
    })

    //UseEffect check every second if time is more than 10
    // const stopTime = Date.now()
    // const timeDifference = Math.floor(stopTime - startTime)
    // else if (timeDifference >= gameSettings.maxTime) {
    //   gameIsOver('codenotcracked')
    //   setMood('sad')
    //   return
    // }

    //if answers.filter[correct] == 4 Code has been cracked
    //randomize display of pins
    if (answers.filter((answerStatus) => answerStatus === 'correct').length === 4) {
      gameIsOver('codecracked')
    } else if (round === gameSettings.maxRound) {
      gameIsOver('codenotcracked')
      setMood('sad')
      return
    } else setRound(round + 1)

    // if (round > 2) setMood('sad')

    const pins = answers
      .filter((answerStatus) => answerStatus)
      .map((answerStatus) => (answerStatus === 'correct' ? 'black' : 'white'))
      .sort(utils.sortArray)

    const newGameChoices = [...gameChoices, { colors: playerChoices, pins: pins || [] }]

    setGameChoices(newGameChoices)
  }

  const gameIsOver = (status) => {
    setGameStatus(status)
    const stopTime = Date.now()
    const timeDifference = Math.floor((stopTime - startTime) / 1000)
    const minutes = Math.floor((timeDifference / 60) % 60)
    const seconds = timeDifference % 60
    const totalPoints = gameSettings.scoreStart - (round * 30 + timeDifference)
    setResult({
      round,
      time: {
        minutes,
        seconds
      },
      totalPoints
    })

    if (status === 'codecracked' && user.uid) storeScore(totalPoints)
  }

  const storeScore = async (totalPoints) => {
    const storeCollection = 'LeaderBord'

    const firebase = await loadFirestore()
    const score = {
      totalPoints,
      user: {
        photoURL: user.photoURL,
        displayName: user.displayName
      }
    }
    //
    const userRef =
      gameroom && gameroom.id
        ? firebase.firestore().collection('gamerooms').doc(gameroom.id).collection(storeCollection).doc(user.uid)
        : firebase.firestore().collection(storeCollection).doc(user.uid)

    userRef.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        userRef.onSnapshot((doc) => {
          const document = { ...doc.data() }
          if (document.totalPoints < totalPoints) userRef.set(score)
        })
      } else {
        userRef.set(score) // create the document
      }
    })
  }

  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '40px auto',
        minHeight: '300px',
        flexFlow: 'column',
        alignItems: 'center',
        '@media screen and (min-width: 1040px)': {
          flexFlow: 'row',
          justifyContent: 'center',
          alignItems: 'initial'
        },
        '@media screen and (max-width: 520px)': {
          mt: 0
        }
      }}>
      <div
        className="GameStatus"
        sx={{
          maxWidth: '420px',
          width: '100%',
          '@media screen and (min-width: 1040px)': {
            maxWidth: '300px'
          }
        }}>
        {gameStatus !== 'notstarted' && (
          <TopGame round={round} startTime={startTime} stopTimer={gameStatus === 'codecracked' || gameStatus === 'codenotcracked'} />
        )}
        <Kawaii mood={mood} />
        {gameroom && (
          <h2
            sx={{
              color: 'white'
            }}>
            {gameroom.roomName}
          </h2>
        )}
      </div>
      <div className="GameArea">
        {gameStatus === 'notstarted' ? (
          <div>
            <StartGameInfo />
            <StartGame startGame={startGame} />
          </div>
        ) : (
          <div>
            {/* <TopGame round={round} startTime={startTime} stopTimer={gameStatus === 'codecracked'} /> */}
            {gameChoices.map((choices, i) => (
              <GameRow key={i} choices={choices} />
            ))}
            {gameStatus !== 'codecracked' && gameStatus !== 'codenotcracked' ? <GameRowActive handleChoice={handleChoice} /> : ``}
            {/* <TheCode /> */}
            <TheCode key="kode" showCode={gameStatus === 'codecracked' || gameStatus === 'codenotcracked'} theCode={code} />
            {gameStatus === 'codecracked' || gameStatus === 'codenotcracked' ? (
              <CodeCracked gameStatus={gameStatus} startGame={startGame} result={result} />
            ) : (
              ``
            )}
          </div>
        )}
      </div>
      {user && <LeaderBord gameroom={gameroom} />}
    </div>
  )
}

export default Game
